const models = require('../models/index');

module.exports.getItens = async (req, res, next) => {
    await models.itens.findAll({raw: true}).then(itens => {
        res.json(itens)
    }).catch(error =>{
        res.json(error)
    })
};

module.exports.getItem = async (req, res, next) => {
    await models.itens.findAll({
        where:{
            id: req.params.itemId
        }
    }).then(itens => {
        res.json(itens[0])
    }).catch(error => {
        res.json(error)
    })
}

module.exports.addItem = async (req, res, next) => {
    await models.itens.create({
        nome: req.body.nome,
        preco: req.body.preco
    }, {fields: ['nome', 'preco']}).then(itens => {
        res.json(itens[0])
    }).catch(error => {
        res.json(error)
    })
}

module.exports.updateItem = async (req, res, next) => {
    await models.itens.update({
        nome: req.body.nome,
        preco: req.body.preco
    }, {where:{id: req.params.itemId}
    }).then((itens) =>{
        res.json(itens[0])
    });
}

module.exports.removeItem = async (req, res, next) => {
    await models.itens.destroy({
        where: {
            id: req.params.itemId
        }
    }).then(()=>{
        res.json({status:true})
    })
}

