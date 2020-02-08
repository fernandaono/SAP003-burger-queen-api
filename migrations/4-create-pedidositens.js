'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos_itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'itens', key:'id'}
      },
      pedido_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {model:'pedidos', key:'id'}
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pedidos_itens');
  }
};

