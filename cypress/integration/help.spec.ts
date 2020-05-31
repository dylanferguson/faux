describe("Help", () => {
  before(() => {
    cy.visit("/help");
  });

  beforeEach(() => {
    cy.get("[data-cy='search-input']").clear();
  });

  it("should render the search input", () => {
    cy.get("[data-cy='search-input']").scrollIntoView().should("be.visible");
  });

  it.skip("should return results for a search query", () => {
    const query = "release";
    cy.get("[data-cy='search-input']").type(query).should("have.value", query);
    cy.get("[data-cy='search-result']")
      .should("be.visible")
      .should("have.length.gte", 1);
  });

  it("should not return any results for a junk query", () => {
    const query = "awoief";
    cy.get("[data-cy='search-input']").type(query).should("have.value", query);
    cy.get("[data-cy='search-result']").should("not.exist");
    cy.get("[data-cy='no-search-result']")
      .scrollIntoView()
      .should("be.visible");
  });

  it("should render FAQs", () => {
    cy.get("[data-cy='faq']").should("have.length.gte", 1);
  });
});
