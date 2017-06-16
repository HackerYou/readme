# Readme
Readme is an online classroom management system.

## Styleguide
For syntax and style, The Readme client follows the [Air BnB Style Guide](https://github.com/airbnb/javascript).

This project also uses ESLint in order to help enforce the AirBnB style. In order for PRs to successfully merge, they will need to adhere to this style guide. We would recommend downloading the ESLint package for your respective code editor to help facilitate this process.

## Contributing to Readme
Readme has two main deployment branches: `staging` and `master`.

The `master` branch contains the production code for Readme. It should never be pushed to directly - it receives code that is PR'd in from the `staging` branch. Merging a pull request from the staging branch will trigger a deploy to the production instance of Readme.

Do not merge from staging into production unless you are 100% sure that the code you have written is working flawlessly on staging. In general, have someone else review and merge your PR from staging.

The `staging` branch deploys to a staging instance of Readme. You will merge your feature branches into here - merging a feature branch into `staging` will trigger a deploy to the staging instance of Readme, and give you an opportunity to test out your new code in an environment that simulates production. Once you have tested your code on staging and it looks good, you are ready to make a pull request from staging into master.

So, the contribution flow for Readme works as follows:

1. Fork a copy of Readme.
2. In your forked copy of Readme, create a feature branch. (`git checkout -b feature/your-feature`)
3. Make all of your changes here.
4. Once you're ready to merge your changes into Readme, push those changes to your fork's feature branch, and make a pull request into the `staging` branch of Readme. It will be run against some tests that will make sure it adhere's to Readme's style and doesn't break any previously committed code.
5. Have another dev on the team review your pull request and merge it in. This will trigger a deploy to the staging instance of Readme..
6. Test your changes on the staging first. If they look good to go, make a pull request from staging into master. This will trigger a deploy to the master branch, launching your code into production. You did it!! 🔥🎉🔥🎉🔥🎉