'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.DECIMAL(10,2)
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itens');
  }
};