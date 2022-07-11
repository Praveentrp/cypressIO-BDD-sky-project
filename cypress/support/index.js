// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

require('cypress-xpath');

beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
    cy.getCookies()
        .then((cookies)=>{
            if(cookies.length > 1) {
                for(let cookie of cookies) {
                    cy.clearCookie(cookie.name,{log:false})
                }
            }
        })
  })

  afterEach(()=> {

    cy.getCookies()
        .then((cookies)=>{
            if(cookies.length > 1) {
                for(let cookie of cookies) {
                    cy.clearCookie(cookie.name,{log:false})
                }
            }
        })
    
  })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  

// Alternatively you can use CommonJS syntax:
// require('./commands')
