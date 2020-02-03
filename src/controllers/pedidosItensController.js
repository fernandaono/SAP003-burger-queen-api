const models = require('../models/index')

module.exports.getPedidosItens = async (req, res) => {
    await models.pedidos_itens.findAll({
        raw: true
    }).then(pedidositens => {
        res.json(pedidositens)
    }).catch(error => {
        res.json(error)
    })
}

module.exports.addPedidosItens = async (req, res) => {
    await models.pedidos_itens.create({
        pedido_id: req.body.pedidoId,
        item_id: req.body.itemId,
        quantidade: req.body.quantidade
    }).then(pedidositens => {
        res.json(pedidositens)
    }).catch(error => {
        res.json(error)
    })
}

module.exports.updatePedidosItens = async (req, res) => {
    await models.pedidos_itens.update({
        quantidade: req.body.quantidade
    }, {where:{pedido_id: req.body.pedidoId, item_id: req.body.itemId}}).then(pedidositens => {
        res.json(pedidositens)
    }).catch(error => {
        res.json(error)
    })
}

module.exports.removePedidosItens = async (req, res) => {
    await models.pedidos_itens.destroy({
        where: {
            pedido_id: req.body.pedidoId,
            item_id: req.body.itemId
        }
    }).then(pedidositens => {
        res.json(pedidositens)
    }).catch(error =>{
        res.json(error)
    })
}