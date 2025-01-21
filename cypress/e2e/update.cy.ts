describe('Cart Operations - Update Items', () => {
  const productId = 'YjFIo1g1LQZHJZg27PUDNv'; // Replace with a valid product ID
  beforeEach(() => {
    // Navigate directly to the product details page using a hardcoded product ID
     cy.visit(`/product/${productId}`);
    cy.get('[data-testid="add-to-cart"]').click();
  });
  cy.get(`[data-testid="cart-item-${productId}"]`).within(() => {
    cy.get('[data-testid="quantity-input"]').should('contain', '1'); // Check initial quantity
  });

  // Increase the quantity
  cy.get(`[data-testid="cart-item-${productId}"]`).within(() => {
    cy.get('[data-testid="quantity-increase"]').click(); // Click the + button
  });

  // Verify the updated quantity after increment
  cy.get(`[data-testid="cart-item-${productId}"]`).within(() => {
    cy.get('[data-testid="quantity-input"]').should('contain', '2'); // Verify quantity incremented
  });

  // Decrease the quantity
  cy.get(`[data-testid="cart-item-${productId}"]`).within(() => {
    cy.get('[data-testid="quantity-decrease"]').click(); // Click the - button
  });

  // Verify the updated quantity after decrement
  cy.get(`[data-testid="cart-item-${productId}"]`).within(() => {
    cy.get('[data-testid="quantity-input"]').should('contain', '1'); // Verify quantity decremented
  });

  // Ensure the quantity does not go below 1
  cy.get(`[data-testid="cart-item-${productId}"]`).within(() => {
    cy.get('[data-testid="quantity-decrease"]').click(); // Try to decrease below 1
    cy.get('[data-testid="quantity-input"]').should('contain', '1'); // Verify it remains at 1
  });
});
  