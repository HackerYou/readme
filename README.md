# Readme

## Getting Started
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` to start your local server.

## Styleguide
For syntax and style, The Readme client follows the [Air BnB Style Guide](https://github.com/airbnb/javascript).

This project also uses ESLint in order to help enforce the AirBnB style. Code that fails to adhere to the AirBnB style will trigger errors in compilation.

The easiest way to navigate this is to download ESLint and get a copy of it running in your editor. For more information on setting up ESLint, check out [this article](http://jonathancreamer.com/setup-eslint-with-es6-in-sublime-text/) on setting up ESLint in your editor - this article is for setting it up using Sublime, but the steps will be similar for your respective editor.

## Contributing to Readme
Contributions to Readme are made by forking the repository, making changes, and then pull requesting your changes back in to `master`.

The process is as follows:
1. Clone this repository
2. Run `npm install`
3. Make your changes, test them locally on your computer.
5. Pull request your changes back into HackerYou/readme's master branch.

New pull requests have to pass all previously written tests before they can be merged. More on testing below.

Merged changes into master  will be automatically deployed to our staging server, which is currently located at `138.197.164.101`.

Once changes have been tested on staging and are good to go, they can be merged from `master` into `production` directly on the repo itself.

## Deploying to Production
Deploying to production will be straightfoward, once it's set up - you simply make a pull request from master into the production branch, which will automatically trigger a deploy to our production server.

## Which DB to build against?
When working on the Readme API, it is **not** recommended to build against the production database. Instead, you should set up a local instance of the DB so you can test against that.

Setting up a local copy of the DB will require some basic knowledge of MongoDB. Talk to any of the instructor team about getting a copy of the DB/helping you to set it up you can test against on your computer. 

Once you've grabbed a copy of the DB, you can create a new instance of the DB on your computer by typing:
`mongorestore -d db_name path/`

## Testing
Currently, we are using Jest for our unit testing. When new components are created, unit tests should be written for them. We are not currently doing any end to end testing, though this might be something worth exploring for the future.

For more information on testing using Jest and Enzyme, check out these notes on [Testing in React](https://github.com/swbloom/scribbles/blob/master/testing.md).

Redux actions and reducers should also be united tested. For more information on how to do this, check out [Writing Tests](http://redux.js.org/docs/recipes/WritingTests.html) in the Redux documentation.



