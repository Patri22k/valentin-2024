# Valentine Gift 2024 using React + TypeScript + Vite

This project is a special gift for my lovely girlfriend as a Valentine's gift. It's a web application built with love using React, TypeScript, and Vite.

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules. It's designed to be fast, efficient, and fun - just like our relationship!

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Running the Application Locally

To run this application on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running `npm install`.
4. Once the dependencies are installed, you can start the application by running `npm run dev`.

The application will start running on your local development server. You can access it by navigating to `http://localhost:5000` (or whatever port your console indicates) in your web browser.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
