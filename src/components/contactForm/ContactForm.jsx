import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

import Container from '../container/Container';
import Button from '../button/Button';

import {
    ContactSection,
    ContactGrid,
    FormCard,
    FormHeader,
    FormEyebrow,
    FormAccent,
    FormTitle,
    FormDescription,
    Form,
    FieldsGrid,
    Field,
    FieldFull,
    Label,
    Input,
    Select,
    TextareaWrapper,
    Textarea,
    CharacterCount,
    SubmitWrapper,
    PrivacyText,
    PrivacyLink,
    ChannelsCard,
    ChannelsHeader,
    ChannelsEyebrow,
    ChannelsAccent,
    ChannelsTitle,
    ChannelsDescription,
    ChannelList,
    Channel,
    ChannelIcon,
    ChannelContent,
    ChannelTitle,
    ChannelValue,
    ChannelDescription,
    SocialContainer,
    SocialDivider,
    SocialTitle,
    SocialLinks,
    SocialLink,
} from '../../styles/components/contactForm.styles';

const ContactForm = ({ config }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        consultationType: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // La integración con backend se realizará posteriormente.
        console.log('Contact form:', formData);
    };

    return (
        <ContactSection>
            <Container>
                <ContactGrid>

                    <FormCard>
                        <FormHeader>
                            <FormEyebrow>
                                {config.form.eyebrow}
                            </FormEyebrow>

                            <FormAccent />

                            <FormTitle>
                                {config.form.title}
                            </FormTitle>

                            <FormDescription>
                                {config.form.description}
                            </FormDescription>
                        </FormHeader>

                        <Form onSubmit={handleSubmit}>
                            <FieldsGrid>

                                <Field>
                                    <Label htmlFor="name">
                                        {config.form.fields.name.label} *
                                    </Label>

                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder={
                                            config.form.fields.name.placeholder
                                        }
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Field>

                                <Field>
                                    <Label htmlFor="email">
                                        {config.form.fields.email.label} *
                                    </Label>

                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder={
                                            config.form.fields.email.placeholder
                                        }
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Field>

                                <Field>
                                    <Label htmlFor="phone">
                                        {config.form.fields.phone.label} *
                                    </Label>

                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder={
                                            config.form.fields.phone.placeholder
                                        }
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </Field>

                                <Field>
                                    <Label htmlFor="consultationType">
                                        {
                                            config.form.fields
                                                .consultationType.label
                                        }
                                    </Label>

                                    <Select
                                        id="consultationType"
                                        name="consultationType"
                                        value={formData.consultationType}
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            {
                                                config.form.fields
                                                    .consultationType
                                                    .placeholder
                                            }
                                        </option>

                                        {config.form.consultationTypes.map(
                                            (type) => (
                                                <option
                                                    key={type}
                                                    value={type}
                                                >
                                                    {type}
                                                </option>
                                            )
                                        )}
                                    </Select>
                                </Field>

                                <FieldFull>
                                    <Label htmlFor="message">
                                        {config.form.fields.message.label} *
                                    </Label>

                                    <TextareaWrapper>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder={
                                                config.form.fields.message
                                                    .placeholder
                                            }
                                            maxLength={
                                                config.form.fields.message
                                                    .maxLength
                                            }
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />

                                        <CharacterCount>
                                            {formData.message.length}/
                                            {
                                                config.form.fields.message
                                                    .maxLength
                                            }
                                        </CharacterCount>
                                    </TextareaWrapper>
                                </FieldFull>

                            </FieldsGrid>

                            <SubmitWrapper>
                                <Button
                                    type="submit"
                                    variant={config.form.action.variant}
                                >
                                    <FiSend 
                                    style={{
                                        marginRight: "1.5rem"
                                    }}
                                    />
                                    {config.form.action.label}
                                </Button>
                            </SubmitWrapper>

                            <PrivacyText>
                                {config.form.privacy.text}{' '}
                                <PrivacyLink
                                    to={config.form.privacy.path}
                                >
                                    {config.form.privacy.label}
                                </PrivacyLink>
                                .
                            </PrivacyText>
                        </Form>
                    </FormCard>

                    <ChannelsCard>
                        <ChannelsHeader>
                            <ChannelsEyebrow>
                                {config.channels.eyebrow}
                            </ChannelsEyebrow>

                            <ChannelsAccent />

                            <ChannelsTitle>
                                {config.channels.title}
                            </ChannelsTitle>

                            <ChannelsDescription>
                                {config.channels.description}
                            </ChannelsDescription>
                        </ChannelsHeader>

                        <ChannelList>
                            {config.channels.items.map((channel) => {
                                const Icon = channel.icon;

                                const content = (
                                    <>
                                        <ChannelIcon>
                                            <Icon />
                                        </ChannelIcon>

                                        <ChannelContent>
                                            <ChannelTitle>
                                                {channel.title}
                                            </ChannelTitle>

                                            <ChannelValue>
                                                {channel.value}
                                            </ChannelValue>

                                            <ChannelDescription>
                                                {channel.description}
                                            </ChannelDescription>
                                        </ChannelContent>
                                    </>
                                );

                                if (channel.href) {
                                    return (
                                        <Channel
                                            as="a"
                                            href={channel.href}
                                            key={channel.id}
                                            target={
                                                channel.id === 'address'
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                channel.id === 'address'
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                        >
                                            {content}
                                        </Channel>
                                    );
                                }

                                return (
                                    <Channel key={channel.id}>
                                        {content}
                                    </Channel>
                                );
                            })}
                        </ChannelList>

                        <SocialContainer>
                            <SocialDivider />

                            <SocialTitle>
                                {config.channels.socialTitle}
                            </SocialTitle>

                            <SocialLinks>
                                {config.channels.social.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <SocialLink
                                            key={social.id}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={
                                                social.label
                                            }
                                        >
                                            <Icon />
                                        </SocialLink>
                                    );
                                })}
                            </SocialLinks>
                        </SocialContainer>
                    </ChannelsCard>

                </ContactGrid>
            </Container>
        </ContactSection>
    );
};

export default ContactForm;