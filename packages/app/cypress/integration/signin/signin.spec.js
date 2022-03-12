/// <reference types="cypress" />


describe('Login Process', () => {
    beforeEach(() => {
        // cy.visit('/');
        cy.visit('/login');
        // cy.intercept('GET', 'http://localhost:5000/api/users', { fixture: 'users.json', delay: 200 }).as('getUsers');
        // cy.wait('@getUsers');
    })

    it('Sign In button should be disabled if no user is selected', () => {
        cy.contains('button', 'SIGN IN').should('be.disabled');
    })

    it('Sign in button should be enabled if a user is selected', () => {
        cy.get('select').select(1);
        cy.contains('button', 'SIGN IN').should('not.be.disabled');
    })

    it('Should navigate to user appointments page after signin in', () => {
        cy.get('select').select(1);
        cy.contains('button', 'SIGN IN').click();
        cy.location('pathname').should('eq', `/appointments/6206a047714387b96ee2af7f`);
    })
});