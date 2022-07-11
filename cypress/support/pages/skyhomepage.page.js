///<reference types="Cypress"/>
///<reference types="Cypress-iframe"/>

import 'cypress-iframe'

class skyHomePage {

launchHomePage() {

    cy.visit("https://www.sky.com/"); 
    cy.url().should('eq', 'https://www.sky.com/');
    cy.get("[title='SP Consent Message']").its('0.contentDocument.body').find("button[title='Agree']").should('be.visible').click();
    
}

navigateDeals() {
    
    cy.get('.primary-nav-list > :nth-child(7) > .nav-item-link').should('be.visible').click();
    
}

verifyDealsURL() {

    cy.url().should('eq','https://www.sky.com/deals');
}

LoginInvalid() {
    cy.get("a[href*='signin']").should('be.visible').click();
    // cy.get("[title='SP Consent Message']").its('0.contentDocument.body').find("button[title='Agree']").should('be.visible').click();
    cy.get("iframe[title*='Sign-In']").its('0.contentDocument.body').find("#username").should('be.visible')
    .click()
    .type('abc@zxy.com')
    cy.get("iframe[title*='Sign-In']").its('0.contentDocument.body').find("[type='button']").click();

}

verifyText() {
    
    cy.get("iframe[title*='Sign-In']").its('0.contentDocument.body').find("h1[class='title']").then(title => {

        const textBox=title.text();
        cy.wrap(textBox).should('have.text','Create your My Sky password')
    })
   
}

launchSkyDealsPage() {

    cy.visit("https://www.sky.com/deals");
    cy.url().should('eq', 'https://www.sky.com/deals');
}

verifyListofDealsPrice() {

    cy.get("[title='SP Consent Message']").its('0.contentDocument.body').find("button[title='Agree']").should('be.visible').click();
    cy.get('.dOmBys').click();  
    cy.get("[class='text__Text-sc-1u9gciq-0 ixLLKw']").each(($e1, index, $list)=> {
        const dealsText=$e1.text();
        cy.log(dealsText);

    })

    cy.get("[class='text__Text-sc-1u9gciq-0 iNTDeb']").each(($e1, index,$list)=> {

        const dealsAmount=$e1.text();
        cy.log(dealsAmount);

    })
}

searchText() {
    cy.wait(5000);
    cy.get('.search-toggle__icon').should('be.visible').click()
    .type('sky')
    
}
verifyEditorialSection(){
    cy.get('.search-toggle__icon').should('have.value', 'sky')
    cy.wait(5000);
    cy.get("div[id='search-results-container']").should('be.visible');
}
}

module.exports = skyHomePage;