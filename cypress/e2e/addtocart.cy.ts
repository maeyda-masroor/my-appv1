describe('Cart Operations - Add Items by Product ID', () => {
    beforeEach(() => {
      // Navigate directly to the product details page using a hardcoded product ID
      const productId = 'YjFIo1g1LQZHJZg27PUDNv'; // Replace with a valid product ID
      cy.visit(`/product/${productId}`);
    });
  
    it('should add the product to the cart from the product details page', () => {
      // Verify the product details are displayed
      cy.get('[data-testid="product-title"]').should('exist'); // Replace with the actual product name
      cy.get('[data-testid="product-price"]').should('exist');
  
      // Add the product to the cart
      cy.get('[data-testid="add-to-cart"]').click(); // Add the product to the cart
      cy.get('[data-testid="cart-icon"]').click();
      // Open the cart and verify the product is added
      cy.get('[data-testid="cart-item"]').should('have.length', 1);
      cy.get('[data-testid="cart-item"]').should('contain',); // Verify the correct product is added
    });
  });
  