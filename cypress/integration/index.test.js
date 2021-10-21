const win = () => {
  Cypress._.times(10, () => {
    cy.contains("+1").click();
  });

  cy.contains("Pay 10 points to change from +1 to +2").click();

  Cypress._.times(5, () => {
    cy.contains("+2").click();
  });

  cy.contains("Pay 10 points to change from +2 to +3").click();

  Cypress._.times(4, () => {
    cy.contains("+3").click();
  });

  cy.contains("Pay 10 points to change from +3 to +4").click();

  Cypress._.times(25, () => {
    cy.contains("+4").click();
  });

  cy.contains("You Win!");
};

describe("Index", () => {
  it("can be won twice", () => {
    cy.visit("http://localhost:3000/");

    win();
    cy.contains("Play again?").click();
    win();
  });
});
