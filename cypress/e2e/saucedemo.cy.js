describe('UI Test', () => {
  it('log in and verify item sorting', () => {
    // Home
    cy.visit('https://www.saucedemo.com/');

    //login
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click()

    // Check A -> Z sorting
    cy.get('.inventory_item_name').then(items => { 
      let itemNames = [...items].map(item => item.innerText);
      let sortedNames = [...itemNames].sort();
      expect(itemNames).to.deep.equal(sortedNames);
    });

    // Change sort to Z -> A
    cy.get('.product_sort_container').select('za');

    // Check if the sorting has changed
    cy.get('.inventory_item_name').then(items => {
      let itemNames = [...items].map(item => item.innerText);
      let sortedNames = [...itemNames].sort().reverse();
      expect(itemNames).to.deep.equal(sortedNames);
    });

    });
  });
