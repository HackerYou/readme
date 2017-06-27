# Readme ... this is 👌
Readme is an online classroom management system.

## Getting Started
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` to start your local server.

## Styleguide
For syntax and style, The Readme client follows the [Air BnB Style Guide](https://github.com/airbnb/javascript).

This project also uses ESLint in order to help enforce the AirBnB style. In order for PRs to successfully merge, they will need to adhere to this style guide. We would recommend downloading the ESLint package for your respective code editor to help facilitate this process.

## Contributing to Readme
Contributions to Readme are made by forking the repository, making a feature branch, making changes, and then pull requesting your changes in.

The process is as follows:
1. Clone this repository
2. Run `npm install`
3. Create a feature branch (`git checkout -b feature/name-of-feature`)
4. Push your changes to your fork's feature branch
5. Merge your changes into this repository's `staging` branch.

Merged changes into staging will be automatically deployed to our staging server, which is currently located at `138.197.164.101`.

Once changes have been tested on staging and are good to go, they can be merged from `staging` into `production` directly on the repo itself - this is step six:

6. Merge staging into master

This will triger a deploy to our production server, which is currently located at `<no production server set>`

## Making a pull request
New pull requests have to pass all previously written tests before they can be merged.

Currently, Readme is using jest/enzyme for unit testing. Each new component that is created should have a unit test - this should live in `components/<component-name>/ComponentName.test.js`. 

