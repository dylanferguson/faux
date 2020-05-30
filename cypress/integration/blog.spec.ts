describe("Blog index", () => {
  before(() => {
    cy.visit("/blog");
  });

  it("should render the header", () => {
    cy.get("[data-cy='blog-index-header']")
      .scrollIntoView()
      .should("be.visible");
  });

  it("should render post links", () => {
    cy.get("[data-cy='blog-post-link']").should("have.length.gte", 1);
  });
});
