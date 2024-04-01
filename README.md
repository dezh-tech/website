<p align="center">
    <img alt="Dezh Technologies" src="./public/fav-icon.svg" width="150" height="150" />
</p>

<h3 align="center">
Building the future of decentralized generation of WEB
</h3>

<br/>

Welcome to the repository for the main website of Dezh Technologies This README will provide you with essential information about the project structure, setup instructions, available scripts, and deployment process.

## Project Overview

This repository contains the source code for the main website of Dezh Technology. The website is built using React, Tailwind CSS, and Vite for fast and efficient development. TypeScript is used for static typing and improved code maintainability.

## Adding Logos to Partners Section

If anyone wants to add their logo to our partners section, they should follow these steps:

1. Add the logo with `#FFFFFF` color to the `public/companies` directory with an `.svg` extension. The SVG name should be the company or team name. For example, `google.svg`.

2. Change the `data/companies.json` file and add their information. The JSON structure should be as follows:

    ```json
    {
        "name": "Name",
        "logo": "/companies/name.svg",
        "website": "https://example.com"
    }
    ```

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the project for production.
- `npm run lint`: Lints the project files using ESLint.
- `npm run preview`: Previews the built project locally.
- `npm run predeploy`: Runs the build script as a pre-deployment step.
- `npm run deploy`: Deploys the built project to GitHub Pages.

## Dependencies

The project has the following dependencies:

- `react` and `react-dom`: Core libraries for building the user interface.
- `tailwind-merge` and `tailwindcss`: Utility libraries for styling the UI.
- `clsx`: A utility for constructing className strings conditionally.
- Various development dependencies for tooling, linting, and TypeScript support.

## Project Structure

The main project files and directories are structured as follows:

- `public/`: Contains static assets.
- `data/`: Contains partners and social media data.
- `src/`: Contains the source code for the React components and styles.
- `package.json`: Configuration file for Node.js dependencies and scripts.
- `tsconfig.json`: Configuration file for TypeScript.
- `vite.config.js`: Configuration file for Vite.

## Deployment

The project is configured to deploy to GitHub Pages. To deploy the project, run:

```bash
npm run deploy
```

This script will build the project and deploy it to the `gh-pages` branch of the repository.

## Contributing

Contributions to the project are welcome! Feel free to submit bug reports, feature requests, or pull requests via the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using Dezh Technology! If you have any questions or issues, please don't hesitate to contact us. Visit our [homepage](https://dezh.tech) for more information about our products and services.
