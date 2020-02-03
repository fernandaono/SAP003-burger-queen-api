const models = require('../models/index')

module.exports.getPedidos = async (req, res) => {
    await models.pedidos.findAll({raw: true}).then(pedidos =>{
        res.json(pedidos)
    }).catch(error => {
        res.json(error)
    })    
}

module.exports.getPedido = async (req, res) => {
    await models.pedidos.findAll({
        where:{
            id: req.params.pedidoId
        }, include:['pedidos_itens']    
    }).then(pedidos => {
        res.json(pedidos[0])
    }).catch(error =>{
        res.json(error)
    })
}

module.exports.addPedido = async (req, res) => {
    await models.pedidos.create({
        nome: req.body.nome,
        mesa: req.body.mesa
    }, {fields: ['nome', 'mesa']}).then(pedidos => {
        res.json(pedidos)
    }).catch(error => {
        res.json(error)
    })
}

module.exports.updatePedido = async (req, res) => {
    await models.pedidos.update({
        nome: req.body.nome,
        mesa: req.body.mesa
    }, {where:{id: req.params.pedidoId}
    }).then(pedidos => {
        res.json(pedidos)
    }).catch(error => {
        res.json(error)
    })
}

module.exports.removePedido = async (req, res) => {
    await models.pedidos.destroy({
        where:{id: req.params.pedidoId}
    }).then(pedido => {
        res.json(pedido)
    }).catch(error =>{
        res.json(error)
    })
}
