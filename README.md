# React---Storybook-UI-kit

UI Kit is an ecosystem of tools, components, variables and highly customizable front-end modules.

UI Kit is a front-end ecosystem for React made with using the power of css-in-js thanks to styled-components and styled-system for constraint-based style props based on scales defined in your theme. It offers an ecosystem of tools, components and variables to create standardized, sharable and highly customizable front-end modules.

Table of Contents
Installation
Storybooks
Background
Installation
This UI-Kit is divided into multiple javascript projects for this we are using yarn workspaces and Lerna. The root directory contains package.json which have predefined scripts .

Install all dependencies, bootstrap, and build

yarn
yarn bootstrap
yarn build
Storybooks
In the packages directory contains different packages which each contain components which are organized with Storybook.

To demo these components move this directory from your terminal and start the storybook server via yarn storybook

However, we do have shortcuts that you can use from the root directory to run multiple at once (in different terminals):

core storybook
To preview the core UI kit, which has most of the base elements:

yarn webql:core
ui blocks storybook
This is where we should be storing the code when finished. You can develop the code in the blocks if it's easier (to skip the yarn build step), but then once you save should be stored in the ui-blocks package.

yarn webql:ui-blocks
Linting
We are also using linting and formatting tool to write a clean code. You could lint all code files of multiple packages with this command.

yarn lint
Now fix those lint errors with this command.

yarn lint:fix
