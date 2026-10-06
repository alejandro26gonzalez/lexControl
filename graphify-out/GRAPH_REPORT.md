# Graph Report - lenoxControl-V1  (2026-09-28)

## Corpus Check
- 201 files · ~1,352,445 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 25 file(s) not represented in the graph (top: .ttf 20, (none) 2, .ini 1)

## Summary
- 1003 nodes · 2770 edges · 44 communities (31 shown, 13 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b2024fbb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- RegisterForm.jsx
- styled-components
- react-icons
- Footer.jsx
- alembic
- package.json
- app/__init__.py
- ProfessionalModal.jsx
- flask
- ContactForm.jsx
- images.js
- legalContentTemplate.styles.js
- routes/auth.py
- LoginForm.jsx
- SpecialtyModal.jsx
- registration.py
- TeamGrid.jsx
- RegisterImpact.jsx
- breakpoints.js
- App.jsx
- ContactLocation.jsx
- ContentSplit.jsx
- Banner
- Hero
- password_reset.py
- users/__init__.py
- misionVision.styles.js
- Pillars.jsx
- validate_password
- graphify.js
- React + Vite
- AGENTS.md
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `RegisterForm()` - 53 edges
2. `ContactForm()` - 44 edges
3. `styled-components` - 36 edges
4. `TeamGrid()` - 31 edges
5. `RecoverPassword()` - 29 edges
6. `breakpoints` - 28 edges
7. `Hero()` - 26 edges
8. `ProfessionalModal()` - 26 edges
9. `ContentSplit()` - 25 edges
10. `react` - 24 edges

## Surprising Connections (you probably didn't know these)
- `create_user()` --calls--> `User`  [INFERRED]
  backend/app/services/users/users.py → backend/app/models/user/user.py
- `forgot_password()` --uses--> `UserProfile`  [INFERRED]
  backend/app/routes/auth.py → backend/app/models/user/user_profile.py
- `resend_otp()` --uses--> `UserProfile`  [INFERRED]
  backend/app/routes/auth.py → backend/app/models/user/user_profile.py
- `create_app()` --uses--> `Config`  [INFERRED]
  backend/app/__init__.py → backend/app/config.py
- `validate_password_reset_otp_record()` --calls--> `verify_otp()`  [EXTRACTED]
  backend/app/services/auth/password_reset.py → backend/app/helpers/otp.py

## Import Cycles
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/auth/auth_identity.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/user/user.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/user/user_profile.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/auth/password_recovery_session.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/auth/password_reset_otp.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/auth/session.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/registration/registration_otp.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/registration/registration_session.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/role/permission.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/role/role.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/role/role_permission.py -> backend/app/__init__.py`
- 3-file cycle: `backend/app/__init__.py -> backend/app/models/__init__.py -> backend/app/models/user/user_role.py -> backend/app/__init__.py`
- 4-file cycle: `backend/app/__init__.py -> backend/app/routes/dashboard.py -> backend/app/services/__init__.py -> backend/app/services/auth/auth.py -> backend/app/__init__.py`
- 4-file cycle: `backend/app/__init__.py -> backend/app/routes/dashboard.py -> backend/app/services/__init__.py -> backend/app/services/auth/password_reset.py -> backend/app/__init__.py`
- 4-file cycle: `backend/app/__init__.py -> backend/app/routes/dashboard.py -> backend/app/services/__init__.py -> backend/app/services/auth/recovery.py -> backend/app/__init__.py`
- 5-file cycle: `backend/app/__init__.py -> backend/app/routes/dashboard.py -> backend/app/services/__init__.py -> backend/app/services/auth/verify_otp.py -> backend/app/services/auth/password_reset.py -> backend/app/__init__.py`
- 5-file cycle: `backend/app/__init__.py -> backend/app/routes/dashboard.py -> backend/app/services/__init__.py -> backend/app/services/auth/verify_otp.py -> backend/app/services/auth/recovery.py -> backend/app/__init__.py`

## Communities (44 total, 13 thin omitted)

### Community 0 - "RegisterForm.jsx"
Cohesion: 0.09
Nodes (66): RecoverPassword(), IDENTIFICATION_TYPES, RegisterForm(), FEEDBACK_ALERT_CONFIG, useFeedbackAlert(), apiRequest(), completeRegistration(), forgotPassword() (+58 more)

### Community 1 - "styled-components"
Cohesion: 0.08
Nodes (51): styled-components, Button(), ButtonContent(), SectionHeader(), ProcessTimeline(), ApproachSection(), SpecialtiesPreview(), ApproachFeature (+43 more)

### Community 2 - "react-icons"
Cohesion: 0.09
Nodes (43): react-dom, react-icons, react-router-dom, AuthContext, AuthProvider(), checkSession(), login(), logout() (+35 more)

### Community 3 - "Footer.jsx"
Cohesion: 0.08
Nodes (40): ref_react_router, SessionManager(), Footer(), ScrollToTopButton(), clearAuthentication(), scrollToTop(), useResetScrollPosition(), useScrollingTop() (+32 more)

### Community 4 - "alembic"
Cohesion: 0.06
Nodes (12): alembic, get_engine(), get_engine_url(), get_metadata(), Run migrations in 'offline' mode. This configures the context with just a URL…, Run migrations in 'online' mode. In this scenario we need to create an Engine…, run_migrations_offline(), run_migrations_online() (+4 more)

### Community 5 - "package.json"
Cohesion: 0.05
Nodes (44): dependencies, framer-motion, @hookform/resolvers, react, react-dom, react-hook-form, react-hot-toast, react-icons (+36 more)

### Community 6 - "app/__init__.py"
Cohesion: 0.11
Nodes (19): Config, create_app(), AuthIdentity, PasswordRecoverySession, PasswordResetOTP, Session, Permission, RolePermission (+11 more)

### Community 7 - "ProfessionalModal.jsx"
Cohesion: 0.12
Nodes (40): react, Navbar(), ProfessionalModal(), useLockBodyScroll(), DesktopLogin, DesktopNavigation, Logo, LogoLink (+32 more)

### Community 8 - "flask"
Cohesion: 0.07
Nodes (22): authlib_integrations_flask_client, admin_dashboard(), client_dashboard(), collaborator_dashboard(), route, database_health_check(), health_check(), route (+14 more)

### Community 9 - "ContactForm.jsx"
Cohesion: 0.14
Nodes (40): ContactForm(), Channel, ChannelContent, ChannelDescription, ChannelIcon, ChannelList, ChannelsAccent, ChannelsCard (+32 more)

### Community 10 - "images.js"
Cohesion: 0.06
Nodes (32): src_assets_images_about_books, src_assets_images_about_hero, src_assets_images_about_office, src_assets_images_about_quote_logo, src_assets_images_contacto_hero, src_assets_images_contacto_office, src_assets_images_home_client_portal_img, src_assets_images_home_focus_img (+24 more)

### Community 11 - "legalContentTemplate.styles.js"
Cohesion: 0.14
Nodes (36): LegalContentTemplate(), iconMap, LegalNavigation(), Bullet, BulletList, Content, ContentEyebrow, ContentHeader (+28 more)

### Community 12 - "routes/auth.py"
Cohesion: 0.12
Nodes (31): authlib_common_security, get_me(), google_login(), login(), logout(), generate_session_token(), get_current_session(), get_current_user() (+23 more)

### Community 13 - "LoginForm.jsx"
Cohesion: 0.14
Nodes (28): LoginForm(), SocialButtons(), FeedbackAlert(), Divider, EyeButton, Field, ForgotLink, Form (+20 more)

### Community 14 - "SpecialtyModal.jsx"
Cohesion: 0.16
Nodes (30): SpecialtiesGrid(), SpecialtyModal(), SpecialtiesGridContainer, SpecialtiesHeader, SpecialtiesSection, SpecialtyCard, SpecialtyContent, SpecialtyDescription (+22 more)

### Community 15 - "registration.py"
Cohesion: 0.17
Nodes (28): RegistrationSession, auth_error(), auth_success(), complete_registration(), forgot_password(), google_callback(), route, register() (+20 more)

### Community 16 - "TeamGrid.jsx"
Cohesion: 0.20
Nodes (25): TeamGrid(), useTeamFilters(), FilterButton, LinkedInButton, SearchContainer, SearchIcon, SearchInput, TeamCard (+17 more)

### Community 17 - "RegisterImpact.jsx"
Cohesion: 0.19
Nodes (22): benefits, RegisterImpact(), Registry(), Register, BenefitContent, BenefitDescription, BenefitIcon, BenefitItem (+14 more)

### Community 18 - "breakpoints.js"
Cohesion: 0.18
Nodes (16): Container(), aboutConfig, About(), Home(), Specialties(), Team(), About, Home (+8 more)

### Community 19 - "App.jsx"
Cohesion: 0.13
Nodes (19): App(), AppLayout, MainContent, src_assets_fonts_cormorant_garamond_static_cormorantgaramond_bold, src_assets_fonts_cormorant_garamond_static_cormorantgaramond_bolditalic, src_assets_fonts_cormorant_garamond_static_cormorantgaramond_medium, src_assets_fonts_cormorant_garamond_static_cormorantgaramond_regular, src_assets_fonts_cormorant_garamond_static_cormorantgaramond_semibold (+11 more)

### Community 20 - "ContactLocation.jsx"
Cohesion: 0.25
Nodes (21): ContactLocation(), LegalLayout(), Feature, FeatureDescription, FeatureIcon, Features, FeatureTitle, LocationAccent (+13 more)

### Community 21 - "ContentSplit.jsx"
Cohesion: 0.27
Nodes (19): ContentSplit(), ActionWrapper, Badge, BadgeLine, BadgeLogo, BadgeMark, BadgeQuote, ContentBody (+11 more)

### Community 22 - "Banner"
Cohesion: 0.27
Nodes (13): Banner(), resourcesConfig, Resources(), Resources, BannerAction, BannerContent, BannerIcon, BannerLogo (+5 more)

### Community 23 - "Hero"
Cohesion: 0.27
Nodes (13): Hero(), contactConfig, Contact(), Contact, HeroActions, HeroContainer, HeroContent, HeroMain (+5 more)

### Community 24 - "password_reset.py"
Cohesion: 0.33
Nodes (12): generate_otp(), generate_salt(), hash_otp(), verify_otp(), RegistrationOTP, create_password_reset_otp_record(), _invalidate_previous_otps(), create_registration_otp() (+4 more)

### Community 25 - "users/__init__.py"
Cohesion: 0.45
Nodes (9): UserProfile, assign_role(), get_role_by_name(), remove_role(), create_user(), create_user_account(), create_user_profile(), get_user_by_email() (+1 more)

### Community 26 - "misionVision.styles.js"
Cohesion: 0.51
Nodes (8): MissionVision(), MissionVisionContent, MissionVisionEyebrow, MissionVisionGrid, MissionVisionIcon, MissionVisionItem, MissionVisionParagraph, MissionVisionSection

### Community 27 - "Pillars.jsx"
Cohesion: 0.51
Nodes (8): Pillars(), PillarCard, PillarDescription, PillarIcon, PillarsGrid, PillarsHeader, PillarsSection, PillarTitle

### Community 28 - "validate_password"
Cohesion: 0.43
Nodes (5): _has_numeric_sequence(), Valida una contraseña según la política de seguridad definida para LEXCONTROL.…, validate_password(), test(), re

### Community 29 - "graphify.js"
Cohesion: 0.40
Nodes (3): IMPORTANT: keep the reminder string free of backticks and $(...) constructs., ref_fs, ref_path

### Community 30 - "React + Vite"
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + Vite

## Knowledge Gaps
- **47 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 162 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `styled-components` connect `styled-components` to `RegisterForm.jsx`, `react-icons`, `Footer.jsx`, `package.json`, `ProfessionalModal.jsx`, `ContactForm.jsx`, `legalContentTemplate.styles.js`, `LoginForm.jsx`, `SpecialtyModal.jsx`, `TeamGrid.jsx`, `RegisterImpact.jsx`, `breakpoints.js`, `App.jsx`, `ContactLocation.jsx`, `ContentSplit.jsx`, `Banner`, `Hero`, `misionVision.styles.js`, `Pillars.jsx`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **Why does `react-icons` connect `react-icons` to `RegisterForm.jsx`, `styled-components`, `Footer.jsx`, `package.json`, `ProfessionalModal.jsx`, `ContactForm.jsx`, `images.js`, `legalContentTemplate.styles.js`, `LoginForm.jsx`, `SpecialtyModal.jsx`, `TeamGrid.jsx`, `RegisterImpact.jsx`, `breakpoints.js`, `ContactLocation.jsx`, `Hero`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `react` connect `ProfessionalModal.jsx` to `RegisterForm.jsx`, `react-icons`, `Footer.jsx`, `package.json`, `ContactForm.jsx`, `LoginForm.jsx`, `SpecialtyModal.jsx`, `TeamGrid.jsx`, `breakpoints.js`, `App.jsx`, `ContactLocation.jsx`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `RegisterForm.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08700481303221029 - nodes in this community are weakly interconnected._
- **Should `styled-components` be split into smaller, more focused modules?**
  _Cohesion score 0.07552447552447553 - nodes in this community are weakly interconnected._
- **Should `react-icons` be split into smaller, more focused modules?**
  _Cohesion score 0.08813559322033898 - nodes in this community are weakly interconnected._