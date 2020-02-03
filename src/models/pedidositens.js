'use strict'

module.exports = (sequelize, DataTypes) => {
    const pedidos_itens = sequelize.define('pedidos_itens', {
        item_id: {type: DataTypes.INTEGER, primaryKey: true},
        pedido_id: {type: DataTypes.INTEGER, primaryKey: true},
        quantidade: DataTypes.INTEGER
    }, {});
    pedidos_itens.associate = function(models) {
        pedidos_itens.belongsTo(models.pedidos, {foreignKey:'pedido_id'})
        pedidos_itens.belongsTo(models.itens, {foreignKey: 'item_id'})
    };
    return pedidos_itens;
}