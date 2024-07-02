/// <reference types="cypress" />

Cypress.Commands.add("getCalcButton", (value) => {
    return cy.get(`[data-testid="calc-${value}"]`)
})