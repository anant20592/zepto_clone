# ZEPTO_clone

Zepto clone - E-commerce website

# project setup - without create-react-app - steps to follow ->

1. create a folder zepto_clone.
2. open the terminal and go inside the folder location.
3. run npm init.
4. install npm modules - react and react-dom
5. install all npm modules as dev dependencies for babel - npm i -D @babel/core, @babel/preset-env, @babel/preset-react
6. install all dev dependencies for webpack - npm i -D webpack, webpack-cli, webpack-dev-server, html-webpack-plugin, babel-loader, css-loader, sass-loader
7. create .babelrc file and add all the required presets. Refer .babelrc file.
8. create webpack.config.js and add entry point, output, plugins and rules. Refer webpack.config.js file.
9. create a folder - src.
10. create a html file- index.html.Inside the body, create a div with id as "root".
11. create a App.js file and create a root component.
12. create index.js file and create a root container and render App component inside it.
13. add a script in package.json to run the web server.
14. in the console, run the script - npm start.
15. In the browser open - http://localhost:8085/

# adding typescript

1. install typescript and typescript definitions (as dev dependencies) for react and react-dom - npm i -D typescript, @types/react,
   @types/react-dom
2. install webpack ts-loader plugin - npm i -D ts-loader
3. rename App.js to App.tsx and index.js to index.tsx and change the entry in webpack.config from index.js to index.tsx.
4. create tsconfig.json file and specify the compiler options required to compile the project.
5. re-start the app.

# adding prettier and eslint for code formatting and code quality

1. install prettier as dev dependencies.
2. install eslint and related plugins as dev dependencies
3. create files - .prettierrc.json and .eslintrc.js and add required configs.
