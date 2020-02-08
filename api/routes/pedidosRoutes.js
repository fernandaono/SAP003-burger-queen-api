const controller = require('../controllers/pedidosController')
const express = require('express');
const router = express.Router();

    router.get('/', (req, res, next) =>{
        controller.getPedidos(req, res);
    })

    router.get('/:pedidoId', (req, res)=>{
        controller.getPedido(req, res)
    })

    router.post('/', (req,res) => {
        controller.addPedido(req, res)
    })

    router.put('/:pedidoId', (req,res) =>{
        controller.updatePedido(req, res)
    })

    router.delete('/:pedidoId', (req,res) => {
        controller.removePedido(req, res)
    })

module.exports = router