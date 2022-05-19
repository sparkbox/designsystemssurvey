Sparkbox Design Systems Survey
==============================

## Setup

The build system for this website uses Node and Gatsby, with each survey being a microsite subpage. The following steps explain how to setup your local environment after pulling down the repository:

1. Before running the project setup node/npm ([Installation instructions](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)).

2. Install the ([Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start#install-the-gatsby-cli)) globally `npm install -g gatsby-cli`

3. Run `npm install` to install all packages and dependencies

## Running Latest Microsite

1. Run `npm start` in your shell terminal
2. A hot-reloading development environment of the latest version will start at `http://localhost:8000`.
3. Open [localhost:8000/2022](http://localhost:8000/2022) in your browser to view the site

## Run all years (except 2018)
1. In your shell run `npm run start:all`
2. A hot-reloading development environment of the all Gatsby versions will start at `http://localhost:8000`.
3. Open [localhost:8000](http://localhost:8000) in your browser and select the desired year to view

**Note:** Running all years can get slow since each year has its own Sass file being compiled. It is recommended to only run the latest version during development

## Run 2018 site locally

1. Run `npm run build2018`. This will:
   1. Remove any current `2018` folder in the `static` directory
   2. Go into /2018
   3. Install dependencies
   4. Build the 2018 survey site
   5. Copy that build into `static` directory

2. Run `npm run build`. This will:
   1. Build the Gatsby sites in the root
   2. Build the 2018 site at `/2018` from the static folder

3. Run a local server.
   1. Install npm http-server `npm i -g http-server`
   2. Start the server from the public folder (this is the compiled site that will be live) `http-server ./public`

4. You can find the latest site at the root `localhost:8080` and the 2018 site at `localhost:8080/2018`

## Gatsby

The site will be powered by [Gatsby](https://www.gatsbyjs.org) and will be organized by:
- [Components](#components)
- [Pages](#pages)
- [SCSS](#scss)

## Editing Content in GitHub

1. Go to `src` > `components`.
2. Click on the file you want to update.
3. Choose the `edit this file` option in the toolbar and update the content.
4. When your updates are complete, create a descriptive commit about your updates that follows the ([Sparkbox Standard on commit messages](https://github.com/sparkbox/standard/tree/master/code-style/git#the-art-of-the-commit-message)).
5. Create a new branch and open up a pull request for your changes, then send the PR to a teammate for review.
