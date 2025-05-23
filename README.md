# Adminify App

![License](https://img.shields.io/github/license/hizpark/adminify-app)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Tests](https://img.shields.io/badge/tests-Jest-brightgreen)
![Codecov](https://img.shields.io/codecov/c/github/hizpark/adminify-app)
![CI](https://github.com/hizpark/adminify-app/actions/workflows/cicd.yml/badge.svg)

> The modern foundation for building elegant and scalable admin dashboards.

A fast, fully customizable admin dashboard built with React, Vite, and Tailwind CSS, optimized for scalability and performance.

## Features

- **Modern UI**: Designed with Tailwind CSS for a responsive and flexible layout.
- **Fast Development**: Powered by Vite for fast builds and fast hot module replacement (HMR).
- **React-based**: Built using React, making it easy to extend and customize.
- **Modular Architecture**: Easily add new features with the modular setup of React components.
- **Fully Customizable**: Tailor the dashboard to meet your project's specific needs.
- **Dark and Light Theme**: Switch between dark and light modes for improved user experience.

## Installation

To get started, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/hizpark/adminify-app.git
cd adminify-app
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server:

```bash
npm run dev
```

Once the development server is running, you can open the app in your browser at [http://localhost:5173](http://localhost:5173).

## Project Structure

```text
.
├── .github                     # GitHub-related configuration
│   └── workflows               # GitHub Actions workflows for CI/CD
├── .husky                      # Husky hooks for Git hooks (e.g., commit-msg, pre-commit)
│   ├── commit-msg              # Commit message hook configuration
│   └── pre-commit              # Pre-commit hook configuration
├── docs                        # Documentation and versioning data
│   └── version.json            # Current version information
├── public                      # Static assets (served by Vite)
├── scripts                     # Automation scripts
│   └── update-version-doc.cjs  # Script for updating version info in documentation
├── src                         # Source code root
│   ├── assets                  # Static resources (fonts, icons, images)
│   ├── components              # Reusable UI components
│   ├── constants               # Global constants and version info
│   ├── hooks                   # Custom React hooks
│   ├── layouts                 # Layout components (e.g., Admin, Auth)
│   ├── pages                   # Application pages (e.g., Home, Login)
│   ├── routes                  # Route definitions
│   ├── services                # API service modules
│   ├── styles                  # Global styles and Tailwind extensions
│   ├── utilities               # Helper functions (formatting, validation, etc.)
│   ├── App.tsx                 # Main application component (TypeScript version)
│   ├── main.tsx                # React app entry point (TypeScript version)
│   └── vite-env.d.ts           # TypeScript type definitions for Vite environment
├── .gitignore                  # Specifies files and directories to be ignored by Git
├── .prettierrc                 # Prettier configuration for code formatting
├── index.html                  # HTML template for the project
├── README.md                   # Project documentation
├── LICENSE                     # License information for the project
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Dependency lock file (generated by npm)
├── eslint.config.js            # ESLint configuration
├── commitlint.config.cjs       # Commit linting configuration
├── release.config.cjs          # Configuration for semantic-release tool
├── tsconfig.json               # Main TypeScript configuration
├── tsconfig.app.json           # TypeScript configuration for the app
├── tsconfig.node.json          # TypeScript configuration for Node.js environment
└── vite.config.ts              # Vite configuration (TypeScript version)
```

## Development

### Setting Up for Development

- **Vite** provides fast builds and Hot Module Replacement (HMR).
- **Tailwind CSS** for styling and customizing your dashboard.
- **React** for building reusable components.

### Available Scripts

- `npm run dev`: Starts the development server with hot module reloading.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs the ESLint code quality checks.
- `npm run lint:fix`: Formats the code using Eslint.

## Customization

You can easily customize the app to suit your needs by:

- Modifying the `src/components` directory to create or update reusable components.
- Adding more pages or routes under the `src/pages` directory.
- Adjusting Tailwind CSS configuration in `tailwind.config.js` for theme changes.
- Adding more libraries as needed.

## Contributing

Issues and pull requests (PRs) are welcome and encouraged. We recommend following this process:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them with a meaningful commit message.
4. Submit a pull request.

## License

MIT License. See the [LICENSE](LICENSE) file for details.
