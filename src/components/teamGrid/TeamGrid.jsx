import { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

import Container from '../container/Container';
import SectionHeader from '../hero/SectionHeader';
import Button from '../button/Button';
import useTeamFilters from '../../hooks/useTeamFilters';

import {
    TeamSection,
    TeamHeader,
    TeamControls,
    SearchContainer,
    SearchIcon,
    SearchInput,
    FilterButton,
    TeamFilters,
    TeamFilter,
    TeamContainer,
    TeamCard,
    TeamImageWrapper,
    TeamImage,
    TeamContent,
    TeamName,
    TeamRole,
    TeamDivider,
    TeamDescription,
    TeamFooter,
    LinkedInButton,
    TeamPagination,
    TeamPageButton,
    TeamPageIndicator,
} from '../../styles/components/teamGrid.styles';
import ProfessionalModal from '../teamProfessionalModal/ProfessionalModal';

const ITEMS_PER_PAGE = 12;

const TeamGrid = ({ config }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const {
        selectedFilter,
        setSelectedFilter,
        filteredMembers,
        searchInput,
        setSearchInput,
        handleSearch
    } = useTeamFilters(config.people);

    const totalPages = Math.ceil(
        filteredMembers.length / ITEMS_PER_PAGE
    );

    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    const visibleMembers = filteredMembers.slice(
        startIndex,
        endIndex
    );

    const handleOpenProfile = (member) => {
        setSelectedMember(member);
    };

    const handlePreviousPage = () => {
        setCurrentPage((previous) => 
            Math.max(previous -1, 1)
        );
    };

    const handleNextPage = () => {
        setCurrentPage((previous) =>
            Math.min(previous + 1, totalPages)
        );
    };

    return (
        <TeamSection>
            <Container>

                <TeamHeader>
                    <SectionHeader
                        eyebrow={config.eyebrow}
                        title={config.title}
                        size="medium"
                    />

                    <TeamControls>
                        <SearchContainer>
                            <SearchIcon>
                                <FiSearch />
                            </SearchIcon>

{/* funcionalidad: guardar el texto de busqueda para enviarselo en conjunto con el boton de buscar abajo  */}
                            <SearchInput
                                type="search"
                                placeholder={config.searchPlaceholder}
                                value={searchInput}
                                onChange={(event) => setSearchInput(event.target.value)}
                                />
                        </SearchContainer>

{/* agregar funcionalidad de buscar contra informacion de backend trayendo la informacion del input anterior */}

                        <Button
                        variant={config.action.variant}
                        onClick={() => {
                            handleSearch();
                            setCurrentPage(1);   
                        }}
                        >
                            {config.action.label}
                        </Button>

                        <FilterButton
                            type="button"
                            onClick={() =>
                                setShowFilters((previous) => !previous)
                            }
                            aria-expanded={showFilters}
                        >
                            <FiFilter />
                            <span>Filtros</span>
                        </FilterButton>
                    </TeamControls>

                    {showFilters && (
                        <TeamFilters>
                            {config.filters.map((filter) => (
                                <TeamFilter
                                    key={filter}
                                    type="button"
                                    $active={selectedFilter === filter}
                                    onClick={() => {
                                        setSelectedFilter(filter);
                                        setCurrentPage(1);
                                    }}
                                >
                                    {filter}
                                </TeamFilter>
                            ))}
                        </TeamFilters>
                    )}
                </TeamHeader>

                <TeamContainer>
                    {visibleMembers.map((member) => (
                        <TeamCard key={member.id}>

                            <TeamImageWrapper>
                                <TeamImage
                                    src={member.image}
                                    alt={member.name}
                                />
                            </TeamImageWrapper>

                            <TeamContent>
                                <TeamName>
                                    {member.name}
                                </TeamName>

                                <TeamRole>
                                    {member.role}
                                </TeamRole>

                                <TeamDivider />

                                <TeamDescription>
                                    {member.description}
                                </TeamDescription>

                                <TeamFooter>
                                    <Button
                                        type="button"
                                        variant="textArrow"
                                        onClick={() =>
                                            handleOpenProfile(member)
                                        }
                                    >
                                        Ver perfil
                                    </Button>

                                    {member.linkedin && (
                                        <LinkedInButton
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`LinkedIn de ${member.name}`}
                                        >
                                            In
                                        </LinkedInButton>
                                    )}
                                </TeamFooter>
                            </TeamContent>

                        </TeamCard>
                    ))}
                </TeamContainer>

                {totalPages > 1 && (
                    <TeamPagination>
                        <TeamPageButton
                        type="button"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        aria-label="Página anterior"
                        >
                            ←
                        </TeamPageButton>

                        <TeamPageIndicator>
                            Página {currentPage} de {totalPages}
                        </TeamPageIndicator>

                        <TeamPageButton
                        type="button"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        aria-label="Página siguiente"
                        >
                            →
                        </TeamPageButton>
                    </TeamPagination>
                )}

                <ProfessionalModal 
                member={selectedMember}
                onClose={() => setSelectedMember(null)}
                />

            </Container>
        </TeamSection>
    );
};

export default TeamGrid;