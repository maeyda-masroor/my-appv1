describe('Product Categories Component', () => {
    beforeEach(() => {
      cy.visit('/'); // Navigate to the homepage where Products component is located
    });
  
    it('should display product categories with images', () => {
      // Check if the "Top Categories" title is present
      cy.get('h1').contains('Top Categories');
  
      // Check if the slider is visible
      cy.get('.slider-container').should('be.visible');
  
      // Verify that categories are displayed with images
      cy.get('[data-testid="product-category"]').should('have.length.greaterThan', 0); // Check for categories
  
      // Check that each category has an image and a name
      cy.get('[data-testid="product-category"]').each(($category) => {
        cy.wrap($category).find('img').should('be.visible'); // Ensure image is present
        cy.wrap($category).find('h3').should('not.be.empty'); // Ensure name is present
      });
    });
  
    it('should navigate to category page when "Read More" is clicked', () => {
      // Click on the "Read More" link for the first category
      cy.get('[data-testid="product-category"]')
        .first()
        .find('a')
        .click();
  
      // Ensure the navigation leads to the correct category page
      cy.url().should('include', '/category/');
    });
  });
  