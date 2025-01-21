describe('Navbar Search Functionality', () => {
    beforeEach(() => {
      // Visit the page that contains the search functionality (replace with actual URL)
      cy.visit('/'); // Replace with the actual URL where the search bar exists
    });
  
    it('should fetch and display products based on the search query', () => {
      const searchQuery = 'chair'; // Define a sample search query
  
      // Type into the search input field
      cy.get('[data-testid="search-input"]').type(searchQuery); // Adjust selector for your search input field
  
      // Click the search button to trigger the search
      cy.get('[data-testid="search-button"]').click(); // Adjust selector for your search button
  
      // Wait for the products to be fetched (add a wait or check network request if necessary)
      cy.wait(500); // Optional: Add wait if there’s a delay in fetching results
  
      // Verify that the products are displayed based on the search query
      cy.get('[data-testid="search-result"]').each(($el) => {
        // Verify that each result contains the search term
        cy.wrap($el).should('contain.text', searchQuery);
      });
  
      // Optionally, verify that the search query is reflected in the results section (e.g., title or header)
      cy.get('[data-testid="search-results-header"]').should('contain.text', `Results for "${searchQuery}"`);
    });
  
    it('should display a no results message when no products match the search query', () => {
      const noResultsQuery = 'NonExistentProduct'; // Define a search query with no matching products
  
      // Type into the search input field
      cy.get('[data-testid="search-input"]').type(noResultsQuery);
  
      // Click the search button
      cy.get('[data-testid="search-button"]').click();
  
      // Wait for results to be fetched
      cy.wait(500);
  
      // Verify that no products are displayed
      cy.get('[data-testid="search-result"]').should('have.length', 0);
  
      // Optionally, verify that a "no results" message is displayed
      cy.get('[data-testid="no-results-message"]').should('be.visible').and('contain.text', 'No results found');
    });
  });
  