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


Create a professional 10-slide executive presentation for an Amtrak leadership meeting. The topic is automating the sync between Angular component development and Figma design using Storybook, Token Studio, and GitHub Actions.
Use a dark navy and white color theme throughout. Dark navy slides for the title, solution overview, workflow, risks, metrics, and closing. Light off-white slides for the problem, tools, Q&A, and rollout plan. Alternate the backgrounds to create a sandwich structure — dark title, light content, dark content, alternating through.
Here are all 10 slides with their exact content:

Slide 1 — Title Slide (dark navy background)
Title: Angular → Figma Design-Dev Sync
Subtitle: Automating the bridge between code and design using Storybook · Token Studio · GitHub Actions
Eyebrow text: AMTRAK LEADERSHIP PRESENTATION · 2026
Include three stat callout boxes on the right side of the slide:
— "1" / Source of Truth (Code)
— "3" / Tools Integrated
— "~0" / Manual Steps for Devs

Slide 2 — The Problem (light background)
Header: THE PROBLEM WE'RE SOLVING
Bold statement: "Components are being built twice."
Subtext: Once in Angular code. Once in Figma. Independently. With no automatic sync between them.
Three cards below with warning icons:
Card 1 — Design Rework: Designers rebuild components from scratch that devs have already built — with wrong colors, spacing, and typography.
Card 2 — Slow Handoff: Days or weeks pass between a dev completing a component and a designer knowing it exists.
Card 3 — Review Loops: Mismatch between code and Figma triggers back-and-forth review cycles that delay delivery.

Slide 3 — The Solution (dark navy background)
Eyebrow: THE SOLUTION
Title: Make code the single source of truth. Let Figma follow automatically.
Show a horizontal 5-step flow diagram with arrows between each step:
Step 1: Developer pushes code
Step 2: GitHub Actions validates and builds
Step 3: Token Studio syncs tokens
Step 4: Figma updated
Step 5: Designer notified
Below the flow, add a callout banner: "Storybook acts as always-on documentation — designers reference component specs, states, and tokens visually without reading code."

Slide 4 — Tools and Technology (light background)
Header: TOOLS & TECHNOLOGY — AND WHY THESE SPECIFICALLY
Three equal columns, each with a colored header and body text:
Column 1 — Storybook / Component Documentation
Body: Visual, interactive component library. Designers browse states, tokens, and behavior without reading any code. Always in sync with the latest build.
Column 2 — Token Studio / Design Token Bridge
Body: Open-source Figma plugin. Bidirectional sync between code tokens and Figma variables. Evaluated vs. Supernova (expensive) and custom scripts (maintenance cost).
Column 3 — GitHub Actions / Automation Workflow
Body: Triggers on every successful build. Validates token schema. Pushes to Figma. Fires Slack notification. No DevOps dependency — self-contained in existing pipeline.

Slide 5 — How the Automation Works (dark navy background)
Eyebrow: HOW THE AUTOMATION WORKS
Title: Step-by-step GitHub Actions workflow
Five numbered vertical cards side by side:
01 — Dev pushes code: Developer commits Angular component to main branch — no extra steps required from them.
02 — Build triggered: GitHub Actions runs the Angular build. If build fails, the workflow stops. Nothing reaches Figma.
03 — Token validation: Extracted tokens are validated against a W3C schema. Malformed or incomplete tokens fail the job and alert the dev.
04 — Push to Figma: Validated tokens are pushed to Figma via Token Studio API using a securely stored access token.
05 — Team notified: A Slack message fires to #design-system-updates with the component name, author, and a direct Storybook link.

Slide 6 — Hard Questions Answered (light background)
Header: QUESTIONS WE ANTICIPATED — AND ANSWERED
Four cards in a 2x2 grid:
Q1: What if designer changes conflict with what dev pushed?
A: Code is the source of truth. Designer changes in Figma are proposals — raised as a design system request, reviewed, and then the developer updates the code which re-syncs to Figma. Figma never overwrites code values automatically.
Q2: What if Token Studio breaks or sync fails?
A: Every push is logged. Failures are visible in the GitHub Actions run history and trigger a Slack alert immediately. Designers are never blocked — Storybook is always live as a fallback reference.
Q3: Who owns this process — Design or Engineering?
A: Engineering owns the source of truth. Design owns how tokens are applied in Figma. Governance sits with a shared working group (lead designer and lead developer) who define the token ownership policy in week one.
Q4: Does this need DevOps involvement?
A: Minimal. One 30-minute security review to confirm GitHub secrets storage meets our standards. The workflow is self-contained and does not modify the deployment pipeline.

Slide 7 — Risks and Mitigations (dark navy background)
Eyebrow: RISKS & MITIGATIONS
Title: We've thought about what can go wrong.
Four horizontal rows, each showing a risk on the left and mitigation on the right, with a colored dot indicating severity (amber = medium risk, green = low risk):
Risk 1 (amber): Designer adoption of Storybook is low → 60-min onboarding session + one-page quick-reference guide. Storybook has a visual UI — no code reading required.
Risk 2 (amber): Token Studio outage or plugin deprecated → Storybook remains a live fallback. Token Studio is open-source — worst case, we fork or replace the push step with a custom script.
Risk 3 (green): Scale issues with full component library → Pilot on 10–15 components in first 60 days. Catch scale issues early before rolling out to full system.
Risk 4 (green): Component variants not auto-created in Figma → Token values sync. Designers still manually apply tokens to variants. Scoped correctly for this phase — variant automation is a phase-2 consideration.

Slide 8 — Rollout Plan (light background)
Header: ROLLOUT PLAN — 90 DAYS
Three equal columns for three phases:
Phase 1 — Foundation — Days 1–30
• DevOps security review (30 min)
• GitHub Actions workflow build
• Token Studio config + Figma variable setup
• Slack notification integration
• Pilot: 10–15 components
Phase 2 — Pilot & Onboard — Days 31–60
• Designer onboarding session (60 min)
• Quick-reference guide published
• Baseline metrics captured
• Pilot feedback loop with design team
• Fix issues before scale
Phase 3 — Scale & Measure — Days 61–90
• Roll out to full component library
• Review: revision cycles reduced?
• Review: Storybook designer usage?
• Review: time-to-handoff improved?
• Document learnings for leadership

Slide 9 — How We Measure Success (dark navy background)
Eyebrow: HOW WE MEASURE SUCCESS
Title: Three metrics. Baselined in month one. Reviewed at 90 days.
Three cards:
01 — Design Revision Cycles
What we measure: How often a designer redesigns something that already exists in code.
Target: Significant reduction by day 90 as designers check Storybook before designing.
02 — Time-to-Handoff
What we measure: Time between a dev completing a component and a designer having its tokens in Figma.
Target: Near real-time after implementation vs. days or weeks today.
03 — Storybook Designer Usage
What we measure: Are designers actually visiting component documentation before creating designs?
Target: Tracked via Storybook analytics. Rising usage = feedback loop is working.

Slide 10 — Closing (dark navy background, split layout)
Left panel (darker navy):
Title: The Bottom Line
Body: This isn't just a tool integration. It's a workflow that respects how both designers and developers work today — and removes the friction between them.
Accent text: Developers keep writing Angular code the way they always have. Designers keep working in Figma the way they always have. The system bridges them automatically.
Right panel:
Header: WHAT WE'RE ASKING FOR
Three numbered cards:
1 — Approval to proceed: Start with a 15-component pilot — low risk, high learning.
2 — 30-min DevOps review: To confirm secret storage meets security standards.
3 — Design team alignment: One onboarding session to bring designers on board.

Design rules to follow throughout:
— Every content slide must have at least one visual element — icon, card, or shape. No plain text-only slides.
— Use card layouts with rounded corners and subtle shadows for content blocks.
— Left-align body text. Center-align only slide titles.
— Keep generous white space between elements.
— Use a sans-serif font like Calibri or Arial throughout.
— Bold section headers in ALL CAPS with letter spacing.
— Never use decorative lines or stripes under titles.
