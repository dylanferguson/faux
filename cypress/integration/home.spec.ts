describe("Blog index", () => {
  before(() => {
    cy.visit("/");
  });

  it("should render header nav", () => {
    cy.get("[data-cy='nav']").scrollIntoView().should("be.visible");
  });

  it("should render the footer", () => {
    cy.get("[data-cy='footer']").scrollIntoView().should("be.visible");
  });
});
