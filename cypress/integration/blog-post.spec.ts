describe("Blog post", () => {
  it("should render post", () => {
    cy.visit("/blog/benefits/");
    cy.get("[data-cy='blog-post']").scrollIntoView().should("be.visible");
  });
});
