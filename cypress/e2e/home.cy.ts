describe("Navigation Tests", () => {
  it("should load the homepage", () => {
    // Visit the homepage
    cy.visit("/");
    
    // Verify that the URL is correct
    cy.url().should("eq", "http://localhost:3000/");
    
    // Check if a unique element like the logo, header, or navbar exists
    });

  it("should navigate to the About page", () => {
    // Visit the homepage
    cy.visit("/");
    
    // Click on the About page link
    cy.get('a[href="/about"]').click();
    
    // Verify the URL has changed to /about
    cy.url().should("include", "/about");
    
    // Check if the About page has a unique element or identifier
    });
});
