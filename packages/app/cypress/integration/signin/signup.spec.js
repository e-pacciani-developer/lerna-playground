describe('Signup process', () => {

    beforeEach(() => {
        cy.visit('/login');
        cy.contains('button', 'Sign Up').click();

    })

    it('Should not submit if all fields have been inserted', () => {
        cy.intercept('POST', 'http://localhost:5000/api/users', { statusCode: 400 }).as('createUser');

        cy.get('button[type=submit]').click();
        cy.get('input[name="name"]').should('be.focused');

        cy.get('input[name="name"]').type('John Doe');
        cy.get('button[type=submit]').click();

        cy.get('input[name="address"]').should('be.focused');
        cy.get('input[name="address"]').type('Rua do Teste');
        cy.get('button[type=submit]').click();


        cy.get('input[name="email"]').should('be.focused');
        cy.get('input[name="email"]').type('e@email.com');
        cy.get('button[type=submit]').click();

        cy.get('input[name="phone"]').should('be.focused');
        cy.get('input[name="phone"]').type('12345678');
        cy.get('button[type=submit]').click();

        cy.wait('@createUser');

        cy.get('div.Toastify__toast--error').should('be.visible');

    })
})