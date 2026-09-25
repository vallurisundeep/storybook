<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Intro to Storybook Angular template
</h1>

This template ships with the main Angular and Storybook configuration files you'll need to get up and running fast.

## 🚅 Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit chromaui/intro-storybook-angular-template taskbox
    ```

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd taskbox/

    # Install the dependencies
    npm install
    ```

1.  **Open the source code and start editing!**

    Open the `taskbox` directory in your code editor of choice and building your first component!

1.  **Browse your stories!**

    Run `npm run storybook` to see your component's stories at `http://localhost:6006`.

## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── .storybook
    ├── .vscode
    ├── node_modules
    ├── public
    ├── src
    ├── .editorconfig
    ├── .gitignore
    ├── angular.json
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.spec.json
    └── README.md

1.  **`.storybook`**: This directory contains Storybook's [configuration](https://storybook.js.org/docs/react/configure/overview) files.

2.  **`.vscode`**: This directory contains [Visual Studio Code](https://code.visualstudio.com/) specific settings, like recommended extensions.

3.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

4.  **`public`**: This directory will contain the development and production build of the site.

5.  **`src`**: This directory will contain all of the code related to what you will see on your application.

6.  **`.editorconfig`**: This file contains the configurations for [EditorConfig](https://editorconfig.org/).

7.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

8.  **`angular.json`**: This file contains all the configurations required for your Angular project.

9.  **`LICENSE`**: The template is licensed under the MIT licence.

10. **`package-lock.json`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

11. **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

12. **`tsconfig.app.json`**: This file contains auxiliary configurations for your Angular project.

13. **`tsconfig.json`**: This file contains configurations the required configurations for TypeScript.

14. **`tsconfig.spec.json`**: This is a TypeScript configuration file aimed for application testing.

15. **`README.md`**: A text file containing useful reference information about the project.

## Contribute

If you encounter an issue with the template, we encourage you to open an issue in this template's repository.

## Learning Storybook

1. Read our introductory tutorial at [Learn Storybook](https://storybook.js.org/tutorials/intro-to-storybook/angular/en/get-started/).

2. See our official documentation at [Storybook](https://storybook.js.org/).

Audited existing components built using PrimeNG — no shared library in use
Designers unaware of what the dev team is building
Sync between 7 teams and design team not followed — created drift and time-consuming process

Component & Code Layer
4. Duplicate components across teams
Multiple teams have built the same component independently — button, input field, modal, data table — with slightly different styling, behavior, and naming. No single source of truth exists at the component level.
5. No design token structure in place
Color values, spacing, and typography are hardcoded in individual component stylesheets. No token system exists, meaning a brand color change would require manual updates across all 7 teams' codebases.
6. PrimeNG theming not standardized
Each team has customized PrimeNG components differently. Some override via CSS, some via SCSS variables, some via component-level styles. There is no agreed theming strategy, which means the same component looks and behaves differently across products.
7. No component versioning or changelog
When a component is updated by one team, other teams have no visibility into what changed, why it changed, or whether they need to update their implementation. There is no versioning or release communication process.

Design Layer
8. Figma files are inconsistent across teams
Each of the 7 teams either has its own Figma file or is working off outdated copies of a shared file. There is no single governed Figma library that all teams pull from, which means design decisions made by one team are invisible to others.
9. Designers are designing components that already exist in code
Because there is no Storybook or shared documentation, designers have no way to know what has already been built. This leads to redundant design work and handoff friction where devs receive specs for things they already built differently.
10. No design review step before development begins
The current process allows development to start without a formal design sign-off. This creates a situation where developers make design decisions by default, and those decisions are often inconsistent with what the design team intended.

Process & Governance Layer
11. No agreed handoff process between design and development
There is no formal definition of when a design is ready for development. Developers pick up work at different stages of design completion, leading to rework when designs change after development has started.
12. 7 teams operating independently with no design system governance
There is no design system owner, no working group, and no documented standards that all teams are expected to follow. Each team makes its own decisions, which compounds the drift over time.
13. Accessibility and consistency not enforced
Without a shared component library and token system, there is no mechanism to enforce accessibility standards (color contrast, focus states, ARIA labels) consistently across all 7 teams. Each team handles this differently or not at all.

Delivery Impact
14. Onboarding new developers takes longer
Because there is no shared library or documentation, new developers joining any of the 7 teams need to re-learn component patterns specific to that team. There is no central reference they can go to.
15. Design-to-dev cycle time is longer than it should be
Based on the audit, a significant portion of the design-to-delivery time is spent on back-and-forth clarification, rework due to drift, and duplication of effort — all of which are process problems, not people problems

Layer 1 — What I audited

"I audited the existing component landscape across the 7 teams — what's built, what's using PrimeNG, what's been customized, and whether anything is shared. The answer is nothing is shared. Every team has built independently."

Layer 2 — What I found

"I found five core problems. One, duplicate components across teams. Two, no design token system — everything is hardcoded. Three, PrimeNG theming is inconsistent. Four, designers have no visibility into what developers have built. Five, there is no governance process — no handoff standard, no component owner, no design system working group."

Layer 3 — What this means

"The drift we're seeing isn't a people problem — it's a process and tooling problem. Nobody has a system that tells them what exists, what's been approved, and what's the right thing to use. That's exactly what this solution addresses."

1. External Widget Content Configuration and Admin Utility
The team aims to enable client-specific widget availability from a library of one hundred eighty widgets, exposing only a subset (e.g., 20) per client or client type (e.g., Medicaid, Medicare, employer plans, commercial). The current problem is that manual, code-based changes for each client cause repeated deployments and slower delivery. The impact includes inconsistent client experiences and scalability limits. The proposed solution is a super-admin configurable, config-driven admin flow/utility to manage widget exposure by client and client type, with feature controls to enable or disable capabilities such as “create reports” and dashboards per client. The widget library must be exposed to support selective configuration, and solutions should avoid backend overhauls unless necessary.

Action Items

Design and implement a super-admin, config-driven admin flow to configure widget availability by client and client type; support examples like Medicaid, Medicare, employer plans, and commercial; expose library of one hundred eighty widgets for selective enablement -- [Insert Name]SandeepanJKAK 2026-12-31


Define and document feature control rules to enable/disable capabilities (e.g., “create reports,” dashboards) per client; ensure alignment with client types and future rebate content exposure -- [Insert Name] 2026-12-31


Provide high-level estimates and a sprint-level plan for the configuration utility and widget exposure work; include considerations for minor UI differences between internal vs. external audiences -- [Insert Name]

2. Landing Page Experience: Config-Driven, Client-Specific
Client landing pages need to vary by client or client type (e.g., Walmart employer plan vs. health plan), with different content blocks, feature modules, and future AI insights. The current challenge is that landing pages require code changes and deployments for variations, impacting time-to-market and increasing maintenance overhead. The solution is to build a config-driven landing page experience controlled by the same admin utility/feature-control framework, enabling modular composition (e.g., dashboards, small insight containers, BI widgets) and client-level configuration. Integration with the dashboard builder and BI work is required, including a plain canvas where clients’ needed content is placed and configured.

Action Items

Define landing page configuration schema and modules (content blocks, dashboard components, insight containers) to be applied per client/client type; align with admin utility -- [Insert Name]SandeepanJKAK


Coordinate with BI/dashboard builder efforts to ensure the landing page can embed reusable components and support a plain canvas placement model -- [Insert Name]Sathish


Produce sprint-wise estimates and a delivery plan for the landing page configuration capability, including future AI-driven insights placement -- [Insert Name]

3. Experience Tied to Pods and External vs. Internal Behavior
An experience is tied to a pod; the interface remains the same for internal and external audiences but behaves differently. The main challenge is scoping effort so that behavior differences are handled primarily via UI/feature toggles rather than backend overhauls. This reduces complexity and isolates changes to configuration and UI behavior.

Action Items

Specify behavior differences between internal and external audiences for the chat experience and related UI; ensure minimal backend impact and include effort in sprint planning -- [Insert Name]

4. Feedback and Enhancement Mechanism (Client and Admin Visibility)
Current feedback handling is bare minimum. The goal is to build a robust mechanism: capture feedback via in-app form, store it, expose an internal admin role view to review and update statuses, and provide client visibility into submitted feedback and status/resolution. Enhancements should be driven by feedback, and feature exposure (e.g., create reports, dashboards) will expand accordingly. Target dates mentioned include 12:31 and 11:15 for delivering parts of this body of work, ensuring visibility and status tracking for clients and admins.

Action Items

Implement in-app feedback capture tied to client accounts; persist in the database; build internal admin tooling to review, update status (e.g., resolved), and log actions -- [Insert Name] 11:15


Build a client-facing feedback portal/view showing submitted feedback items, statuses, and updates; support notifications by internal admins/SEs to clients about resolutions -- [Insert Name] 2026-12-31


Define an enhancement intake process linking feedback to capability exposure (e.g., enabling “create reports,” dashboards) and prioritize for release cycles on 11:15 and 12:31 -- [Insert Name] 11:15


Enable “create reports” capability for eligible clients via feature controls; evaluate feasibility of related “write reports” and “stories” later; ensure dashboards can be enabled similarly -- [Insert Name] 2026-12-31

5. Accessibility Readiness and Remediation
Accessibility must meet relevant WA standards for customer needs. The current gap is unknown specific issues until the accessibility team provides feedback. The impact of non-compliance includes blocked deployments and customer dissatisfaction. The plan is to meet the accessibility team, receive findings, and allocate capacity in Sprints 47–51 to remediate issues so they can be closed out promptly.

Action Items

Schedule and conduct a review with the accessibility team; collect actionable findings mapped to WA standard levels -- [Insert Name]


Reserve capacity in Sprints 47, 48, 49, 50, 51 to address accessibility feedback and complete remediation -- [Insert Name]


Track closure of accessibility issues and verify support for customer-required levels of compliance -- [Insert Name]

6. Rebate Reporting Exposure in Client Experience
Once rebate reporting becomes available, related curated content should be exposed on client experiences and landing pages. The present dependency is the availability of rebate reporting; the impact is delayed value delivery if not integrated early. The solution is to plan configuration hooks and containers in the landing page/admin utility to enable rebate content exposure quickly upon readiness.

Action Items

Define configuration points and UI containers to expose rebate reporting content on client landing pages; align timing with rebate reporting availability -- [Insert Name]


Prepare content curation guidelines and feature flags for enabling rebate reporting per client -- [Insert Name]

AI Suggestions

AI has identified the following issues that were not concluded in the meeting or lack clear action items; please pay attention:

Ownership gaps: Multiple tasks list no explicit executors beyond names referenced for socialization (e.g., Sandeepan, JK, AK, Sathish). Assign a single accountable owner for each action item and clarify supporting roles to avoid delays.

Ambiguous dates and dual milestones: “11:15” and “12:31” were cited as targets without explicit year or scope partitioning. Specify exact scope for each milestone, confirm the year if applicable, and define which features land on 11:15 vs. 12:31 to manage expectations.

Accessibility scope and compliance level: WA standards were mentioned without selecting target compliance level(s) or defining test protocols. Confirm the exact standard level (e.g., WCAG 2.x AA) and finalize the audit plan, tooling, and acceptance criteria before Sprint 47 begins.

Rebate reporting dependency risk: Exposure of rebate content depends on rebate reporting availability with no timeline stated. Establish dependency tracking, a target availability date, and a contingency plan if rebate reporting slips.

Internal vs. external behavior definition: The chat experience and other UI behaviors are assumed to be UI-only differences, but no concrete specification exists. Produce a detailed behavior matrix and validation plan to prevent late discovery of backend needs.


