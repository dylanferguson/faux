describe("Login", () => {
  before(() => {
    cy.visit("/login");
  });

  it("should render login form", () => {
    cy.get("[data-cy='login-form']").scrollIntoView().should("be.visible");
  });

  it("should be able to login", () => {
    cy.get("[data-cy='login-email-input']").type("integration@faux.io");
    cy.get("[data-cy='login-password-input']").type("FxQcJAiDj8gL*QjYN{enter}");
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
