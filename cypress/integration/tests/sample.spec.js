describe('Sample test', function () {
  it('Open NR Demo', function () {

    cy.visit('http://www.newsroomdemo.com/');

    cy.get('.myClass');
  });
});