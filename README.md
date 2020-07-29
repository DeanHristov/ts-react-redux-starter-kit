# TS-React-Redux-Starter-Kit

The purpose of this project is to get you a bunch of most popular front-end technologies together in one place.
My primary goal to make this project actually gives you a stable production-ready starter kit which is possible to build modern SPA applications. 

## Requirements
Ok, before you dive into the project make sure that you have installed on your machine following technologies:

* [Node](https://nodejs.org/) `^12.18.2`
* [Yarn](https://yarnpkg.com/) `^1.22.4` or [NPM](https://www.npmjs.com/) `^6.14.5`
* [TypeScript](https://www.typescriptlang.org/) `^3.9.5`

## Installation
After confirming that your environment meets the above [requirements](#requirements), you can clone the project based on `ts-react-redux-starter-kit` by doing the following:

```bash
$ git clone https://github.com/DeanHristov/ts-react-redux-starter-kit.git <project-name>
$ cd <project-name>
```

When you're done with the steps above, you need to install the project dependencies. I recommend you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn install # Install project dependencies (or `npm install`)
```
## Running the Project

After completing the [installation](#installation) step, you're able to run the project!

```bash
$ yarn run:dev  # Start the development server (or `npm run:dev`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`  or `npm run <script>`  | Description |
|----------------------|-------------------------------------------------------|
|`start`               |Serves your app in dev-server mode at `localhost:8080`|
|`run:dev`             |Serves your app in dev-server mode at `localhost:8080` with [webpack-dashboard](https://www.npmjs.com/package/webpack-dashboard) for a better monitoring|
|`build:prod`          |Builds production-ready code to **./dist** directory|
|`test`                |Runs unit tests with [Jest](https://jestjs.io/)|
|`test:watch`          |Runs the tests in watch mode to re-run tests when changed|
|`test:coverage`       |Runs the tests in coverage mode|
|`test:coverage:watch` |Runs the tests in coverage mode and watch them|
|`ts-lint`             |[Lints](https://palantir.github.io/tslint/) potential issues in the project|
|`ts-lint:fix`         |[Lints](https://palantir.github.io/tslint/) potential issues in the project and try to fix them. Fixes linting errors for select rules (this may overwrite linted files) [TSLint command-line interface](https://palantir.github.io/tslint/usage/cli/)|

## Project Structure

The project structure presented in this boilerplate is **flatten**, where functionality is grouped primarily by feature rather than the file type.
This structure is only meant to serve as a guide, it is by no means prescriptive. If you wish to read more about this structure, please continue to read the structure below.

```

├── build                           # All build-related code
│   └── build.config.js             # Here is store the configuration of webpack for both build processes (dev/prod)
│   └── jest.config.js              # The whole configuration of testing is described here
│   └── webpack.dev.js              # Development configuration of webpack. Here is included devServer config too
│   └── webpack.prod.js             # Production-ready configuration of the webpack
├── dist                            # Production-ready code is stored here
├── src                             # Application source code is stored here
│   ├── common                      # Most common global reusable components are stored here. Basically, they are reusable for the app
│   │   └── containers              # Most common container components (like Header, Footer and etc...) are stored here
│   │   └── ui                      # Most common UI components (like Button, Heading and etc...) are stored here
│   │   └── ctx                     # React Custom context files
│   │   └── hooks                   # React reusable hooks
│   │   └── ui                      # Most common UI components (like Button, Heading and etc...) are stored here
│   │   └── ProtectedRoute.tsx      # HOC that is responsible to manage/keep controls over the public/private routes
│   ├── constants                   # Global Reusable Container Components
│   │   └── i18next.config.ts       # internationalization setup
│   │   └── initialState.ts         # The initial app state
│   ├── core                        # Global Reusable static files that they are usable in the project
│   │   └── Auth.ts                 # Pretty simple (insulated) logic for Authentication of the user to the app
│   │   └── Logger.ts               # Logger tool used in dev mode. It provides several log modes (Debug, Info, Warning, and Error) to display messages in the console
│   │   └── Uitls.ts                # More common utility functions that they are used in many places in the app
│   ├── locales                     # internationalization locales
│   │   └── bg.ts                   # The all translation keys for specific language (bg-BG) are here
│   │   └── en.ts                   # The all translation keys for specific language (en-EN) are here
│   ├── routes                      # Fractal route store for the whole app
│   │   └── Home                    # Fractal sub-routes
│   │   │   └── containers          # Container components for this sub-route
│   │   │   └── ui                  # Presentation conponents for this sub-route
│   │   │   └── HomeContainer.tsx   # Entry point for the route
│   │   │   └── HomeContainer.scss  # Entry styles for the route
│   │   └── Login                   # Fractal another sub-routes
│   │   │   └── ....                
│   │   └── index.ts                # Configuration for the all sub-routes
│   ├── store                       # Create and instrument redux store
│   │   └── locales                 # Redux-specific piece
│   │   │   └── actions.ts          # Actions registry
│   │   │   └── index.ts            # Entry point of this sub-store scheme
│   │   │   └── reducer.ts          # Reducer registry and injection
│   │   │   └── selectors.ts        # Selectors registry
│   │   │   └── types.ts            # Types registry
│   │   │   └── sagas.ts            # Sagas registry
│   │   └── profile                 # Another redux-specific piece
│   │   │   └── .....               
│   │   └── createStore.ts          # Create redux store
│   ├── styles                      # Global Reusable Container Components
│   │   └── base.scss               # Basic styles
│   │   └── reset.scss              # Reset styles
│   ├── tests                       # Unit tests
│   ├── index.html                  # Entry HTML page that contain the app
│   ├── Main.tsx                    # Entry point of the app - You start from here! 
│   ├── Main.scss                   # The most common styles of the app are stored here
├── index.tsx                       # Application bootstrap and rendering
```

### Hot Reloading

The project support [HMR](https://webpack.js.org/concepts/hot-module-replacement/) provided by [webpack](https://webpack.js.org).
By default when the app is running via `yarn run:dev` or `yarn start`, the  reloading is enabled by default.
This feature is implemented with webpack's capabilities where code updates can be injected to the application while it's running. That means:

* For **JavaScript** modules, a code change will trigger the application to re-render from the top of the tree.
* For **Sass**, any change will update the styles in realtime, no additional configuration or reload needed.
* For **Global state** is preserved, but the component state is reset

## Routing
In the starter kit the routing is implement via  `react-router-dom` [React router](https://reactrouter.com/web/guides/quick-start). For more details please, see the [project structure](#project-structure) section for more information.

## Testing
To do implement via future task...

## Building for Production

## Deployment

Basically, this starter kit is deployable by serving the `./dist` folder generated by `yarn build:prod`. This project does not concern itself with the details of server-side rendering or API structure! 

## Licence
Feel free to use this project for your commercial project. It is under [MIT](https://opensource.org/licenses/MIT) license.

## Contributors
 * [Dean Hristov](https://dhristov.eu/) - Owner of this project
 
## About me?

My name is [Dean Hristov](https://www.linkedin.com/in/dean-hristov-7527a169/) and in the past several years my professional career is focused on front-end technologies. I have been part of many projects
with different complexity. More about me can be found in my personal [blog](https://dhristov.eu/).
