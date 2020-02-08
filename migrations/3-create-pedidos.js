'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_criacao: {
          type: Sequelize.DATE

      },
      nome: {
        type: Sequelize.STRING
      },
      mesa: {
        type: Sequelize.INTEGER
      }
       
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pedidos');
  }
};