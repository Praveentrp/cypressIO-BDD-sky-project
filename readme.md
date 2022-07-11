<a name="Cypress Framework"></a>
#Cypress Test Automation Framework with BDD Cucumber

#------------------------------------------------------------------

The framework is based on cypress.io to test UI & API. It's purely a BDD framework that support Page Object Model design Pattern.

Cypress.io deosn't support BDD directly as it is developed based on Mocha. To integrate BDD way of test development design implementation we need a preprocessor. One such plugin is 'cypress-cucumber-preprcessor'
[https://www.npmjs.com/package/cypress-cucumber-preprocessor]

## Setup

###### Node version > 12 required

1. Comment/Remove the below dependency in package.json for installing the secondary cypress dependencies.

"devDependencies": {
    "cypress": "^9.7.0"
}

This is required as we need to download the sepcific version of cypress 9.7.0.

2. npm install cypress@9.7.0

3. npx cypress open or ./node_modules/.bin/cypress open or npx cypress run --spec cypress/integration/skyShopPage/skyShopPage.feature --browser=chrome --headed

3. After Cypress test runner gets opened, click on the feature files (editorialSectionValidation.feature or skyShopPage) to run.

