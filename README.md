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
