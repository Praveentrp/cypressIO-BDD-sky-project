import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import skyHomePage from "../pages/skyhomepage.page"

const skyHP = new skyHomePage();

Given (/^I am on the home page$/, () =>{
skyHP.launchHomePage();
} )

When (/^I navigate to ‘Deals’$/, () =>{
    skyHP.navigateDeals();    
} )

Then ('the user should be on the {string} page', () =>{
        skyHP.verifyDealsURL();      
} )

When ('I try to sign in with invalid credentials', () => {

skyHP.LoginInvalid();
} )

Then ('I should see a box with the text ‘Create your My Sky password’',()=> {
    skyHP.verifyText();
})

Given ('I am on the {string} page',()=>{

    skyHP.launchSkyDealsPage();
})

Then ('I see a list of deals with a price to it',()=>{
skyHP.verifyListofDealsPrice();

})

When ('I search ‘sky’ in the search bar',()=>{
    skyHP.searchText();
    
})

Then ('I should see an editorial section',()=>{

    skyHP.verifyEditorialSection();
} )



    
