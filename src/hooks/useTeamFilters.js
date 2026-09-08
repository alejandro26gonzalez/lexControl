import { useMemo, useState } from "react";

const useTeamFilters = (collaborators = [], filters = []) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('Todos');
    const [searchInput, setSearchInput] = useState('');

    const filteredMembers = useMemo(() => {
        const normalizedSearch = searchTerm.toLowerCase().trim();

        return collaborators.filter((person) => {
            const matchesSearch =
                !normalizedSearch ||
                person.name.toLowerCase().includes(normalizedSearch) ||
                person.specialty.toLowerCase().includes(normalizedSearch);

            const matchesFilter =
                selectedFilter === 'Todos' ||
                person.specialty === selectedFilter;

            return matchesSearch && matchesFilter;
        });
    }, [collaborators, searchTerm, selectedFilter]);

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedFilter('Todos');
    };

    const handleSearch = () => {
        setSearchInput(searchInput);
    };

    return {
        searchTerm,
        setSearchTerm,
        selectedFilter,
        setSelectedFilter,
        filteredMembers,
        filters,
        resetFilters,
        handleSearch,
        searchInput,
        setSearchInput,
    };
};

export default useTeamFilters;