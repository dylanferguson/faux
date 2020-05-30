describe("Blog post", () => {
  it("should render post", () => {
    cy.visit("/blog/part-i-current-state-of-the-service");
    cy.get("[data-cy='blog-post']").scrollIntoView().should("be.visible");
  });
});
