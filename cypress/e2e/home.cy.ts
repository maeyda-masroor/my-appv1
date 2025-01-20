describe("Home Page", () => {
    it("should load the homepage", () => {
      cy.visit("/"); // Cypress automatically appends this to the `baseUrl`
      cy.contains("Welcome to My App"); // Adjust based on your app content
    });
  
    it("should navigate to the About page", () => {
      cy.visit("/");
      cy.get('a[href="/about"]').click(); // Adjust selector for your app
      cy.url().should("include", "/about");
      cy.contains("About Us"); // Check for specific content
    });
  });
  