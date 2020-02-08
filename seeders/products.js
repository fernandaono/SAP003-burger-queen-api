'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        nome: 'Café',
        preco: 3,
      
      },
      {
        nome: 'Maça',
        preco: 2,
        
      },
      {
        nome: 'Pão',
        preco: 3,
        
      },
      {
        nome: 'Queijo',
        preco: 5,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};