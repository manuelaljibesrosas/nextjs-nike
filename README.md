# React Code Exercise

This exercise simulates a typical scenario we'll face with our Next applications at One of None. It's a simple deliverable, but it's designed to test your ability to write clean, maintainable code and adhere to the latest React and Next.js standards.

This repository includes all of the assets and libraries that you'll need to complete this task. It should not be necessary to install any additional packages or fonts, but you may do so if you wish.

## The Task

In the `reference` folder, you will find 2 simplified screenshots from the Nike website. Your task is to recreate a products grid page and a product detail page using the seed data provided in `src/utils/seed-data.ts` and menus from `src/utils/menus.ts`. We chose to use Nike because its a clean and simple design that should make this task straightforward and attainable within 60 minutes.

The majority of the site's content has already been set up for you, so your job is to focus on layout. You will also find some helpful CSS variables in `src/styles/global.css` that you may choose to use in your implementation.

### Interactivity

To protect your time, you are not expected to add detailed interactivity to the page layouts. For example, the search, favorites, and cart buttons in the header do not need to be functional. The accordion component on the product detail page does not need to expand / collapse. However, you should ensure that all buttons are clickable elements.

### Mobile Responsiveness

You should ensure that your implementation is responsive and looks good on mobile devices. You can limit the number of your media queries by relying on CSS flexbox and grid layouts. For the sake of time, you are **not expected** to build a mobile menu system for the header. You can simply hide primary navigation on mobile devices.

### Styling

For this exercise, please use CSS, SCSS, and/or CSS / SCSS modules (the `sass` library has already been installed for you if you choose to use it). Please refrain from styling with Tailwind or CSS-in-JS libraries as we do not use these tools at One of None.

You are also free to add global styles and utility classes in the `styles` directory if it will help you complete the task more efficiently.

## Setup Instructions

1. Clone this repository to your local machine. Please note that there are other candidates working on this exercise, so do not fork this repository or your work will be public.
2. Install all dependencies with your package manager of choice. We use `pnpm` at One of None but you are free to use `yarn`, `npm`, or any other package manager.
3. Run the development server with `pnpm dev` or `yarn dev` or `npm run dev` to get started.

## Submission

To submit your work, you can either create a public repository and send us the link, or you can zip your project and send it to us via email. If you decide to zip, just make sure that you delete the `node_modules` and `.next` directories first.

Please ensure that your submission includes all of your source code and any other files that are necessary to run the project.

If you have any questions about the task, please don't hesitate to reach out to us. Good luck!
