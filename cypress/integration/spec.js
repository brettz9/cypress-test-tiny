/// <reference types="cypress" />
describe('page', () => {
  it('should catch invalid element by pseudo-selector', () => {
    cy.visit('http://localhost:8000/');
    const tooShortOfAName = 'a';
    cy.get('[data-name="name"]').type(tooShortOfAName);
    // cy.get('[data-name="action2"]').click();

    cy.get('[data-name="name"]:invalid').should('have.length', 1);
  })

  it('should catch invalid element by JS API', function () {
    cy.visit('http://localhost:8000/');
    const tooShortOfAName = 'a';
    cy.get('[data-name="name"]').type(tooShortOfAName);
    // cy.get('[data-name="action2"]').click();

    cy.get('[data-name="name"]').then(($input) => {
      return expect($input[0].validity.tooShort).to.be.true;
    });
  });

  it('should obtain environmental variables', function () {
      cy.log(Cypress.env('secret'))
      expect(Cypress.env('secret')).to.equal('Be good');
  });
})
