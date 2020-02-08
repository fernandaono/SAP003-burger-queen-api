const controller = require('../controllers/pedidosItensController')
const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    controller.addPedidosItens(req, res)
})

module.exports = router