describe('Dynamic Routing Tests', () => {
    const baseUrl = 'http://localhost:3000'; // Your app's base URL
    const categoryId = '0e0ztuJY6NWdyblBES3JSp';
    const productId = 'YjFIo1g1LQZHJZg27PUDNv';
  
    it('should navigate to the category page with a dynamic ID', () => {
      // Visit the category page
      cy.visit(`${baseUrl}/category/${categoryId}`);
      
      // Assert the correct category page loads
      cy.url().should('include', `/category/${categoryId}`);
      cy.get('h1').should('exist'); // Adjust to check for specific content, e.g., category name
    });
  
    it('should navigate to the product page with a dynamic ID', () => {
      // Visit the product page
      cy.visit(`${baseUrl}/product/${productId}`);
      
      // Assert the correct product page loads
      cy.url().should('include', `/product/${productId}`);
      cy.get('h1').should('exist'); // Adjust to check for specific product title
      });
  });
  