# webpack-babel-eslint

A boilerplate containing essential build tools. It uses
[Webpack](https://webpack.js.org) and includes the
[Webpack Dev Server](https://github.com/webpack/webpack-dev-server) with
hot-reloading for easy development and [Babel](https://babeljs.io),
[UglifyJS](http://lisperator.net/uglifyjs/) and a optimized production config
for Webpack to build transpiled, minified `.js` files along with gzipped files.

Furthermore [ESLint](https://eslint.org), preconfigured to use the
Airbnb rules, is provided to check your code. (Feel free to adjust
`.eslintrc` to you needs)

Finally, a `Dockerfile` is included that uses a two-stage build to create
a final image that only contains the built files and the small
[http-server](https://www.npmjs.com/package/http-server), which can server
the files (and the gzipped versions) and nothing else, ready to deploy
in any cluster.

Contrary to other boilerplates, *only* build tools are included, and you
are free to choose whatever framework you like and get started quickly!

## Setup

Clone this repository and run `npm install` to install all dependencies.

([Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com) are required.)

## Commands

A few useful commands are configured in npm:

```
# Start the development server
npm start

# If the development server does not detect file changes, try starting as root
sudo npm start

# Lint your code
npm run lint

# Lint and fix errors if possible
npm run lint-fix

# Build your project
npm run build
```

## Configuration

In many situations, development and production environments require different
configurations. With
[Webpack Resolve](https://webpack.js.org/configuration/resolve/), this can be
handled easily. There are two configuration files, `config.js` and
`config.prod.js`, which you can adjust to your needs.

In your code, `require('config')` or `import * as config from 'config'`,
which will automatically resolve to `config.js` when using the development
server and to `config.prod.js` when building your project.

## Acknowledgments

Many thanks go to [Moritz Schneider](https://github.com/Moschn), who created the initial
configuration for webpack.
