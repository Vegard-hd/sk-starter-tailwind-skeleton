# SvelteKit Starter Template

A modern, opinionated starter template for building responsive web applications with SvelteKit.

## 🚀 Features

- **[Svelte 5](https://svelte.dev)**: The latest version of the cybernetically enhanced web apps compiler.
- **[Tailwind CSS](https://tailwindcss.com)**: A utility-first CSS framework for rapid UI development.
- **[Skeleton UI](https://www.skeleton.dev)**: A fully featured UI toolkit for Svelte + Tailwind.
- **Responsive Navigation**: A custom `Appbar` component that adapts to screen size:
  - **Mobile**: Bottom navigation bar for easy thumb access.
  - **Desktop**: Collapsible side rail/sidebar for efficient screen real estate usage.
- **Tooling**: Pre-configured with [ESLint](https://eslint.org) and [Prettier](https://prettier.io) for code quality.

## 🛠️ Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Linting & Formatting

Keep your code clean and consistent:

```sh
npm run lint
npm run format
```

## 📦 Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
