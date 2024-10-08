# Vitamix

My Vite + React + Typescript starter template.

## Features

-  Vite with React, Typescript and absolute imports.
-  Tailwind CSS v3 with a basic reset for form styles and a Prettier plugin that automatically sorts classes.
-  Use ESLint and Prettier on VSCode.
-  React Hook Form for form management with zod and hook-form-resolvers.
-  Tanstack query and Axios for data fetching.
-  React Error Boundary
-  React Toastify for toast nofitications
-  React Router DOM for client side navigation

## Get started

Use [degit](https://github.com/Rich-Harris/degit) to clone this repo to your local machine with an empty git history

```
npx degit williamssam/vitamix my-app
```

Replace <code>my-app</code> with your projects name.

Then, install the dependencies:

```
pnpm install
```

## Gotchas

You can only use <code>pnpm</code> as your package manager. To use other package manager like <code>yarn</code> or <code>npm</code>, remove <code>"preinstall": "npx only-allow pnpm"</code> from package.json

## TODOS
- Use "tanstack router" as the default router
- Use "ky" as the default data fetching library

## Other intersting package you can use

-  [Nice Modals](https://github.com/eBay/nice-modal-react): To manage mutiple modals in your app.
-  [Tanstack Router](https://tanstack.com/router/v1/docs/overview): for typesafe routing
-  [Rehookify Date picker](https://github.com/rehookify/datepicker): for creating calender, date picker etc
-  [Container Queries](https://github.com/tailwindlabs/tailwindcss-container-queries): Tailwind plugin for css container queries
-  [Use SWR](https://swr.vercel.app/): For data fetching
-  [React Aria/React Aria components](https://react-spectrum.adobe.com/react-aria/components.html): For accessible unstyled react components
-  [Ark UI](https://ark-ui.com/): For accessible unstyled components
-  [Justd](https://getjustd.com/docs/getting-started/introduction): for unstyled react aria components
