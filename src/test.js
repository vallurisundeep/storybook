What's done

- Table component (ads-table) is built and documented in Storybook. It wraps PrimeNG's table with our design system's look and feel, and supports three sizes (small/medium/large), an optional title bar, column sorting, pagination, striped rows, a loading state, and a configurable empty-state message. Teams consume it through a simple, typed API without needing to know anything about PrimeNG underneath.
- Tailwind integration is in place across the library, so components are styled with a consistent utility system (spacing, colors, typography) rather than one-off CSS. This keeps future components fast to build and visually consistent.
- All of this work has been pushed to the sundeep-dev-work feature branch and is ready for review.

One thing to be aware of

The styling currently runs on interim token values rather than the live design tokens from the design system pipeline. This was a deliberate sequencing choice so component work didn't block on token integration. Because everything is already wired through token variables, once the complete token set is integrated the components will pick up the live values automatically — no rework of the components and no API changes for consuming teams.

What's next

- I'm moving on to the CAM components from the design system, following the same build pattern established with the table.
- In parallel, the full design token integration remains the key dependency — once it lands, the table and all existing components switch over to live design-system values.

Happy to demo the components in Storybook or answer questions.

Thanks,
Sundeep
