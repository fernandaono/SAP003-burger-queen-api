const controller = require('../controllers/itensController')
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    controller.getItens(req, res, next);
})

router.get('/:itemId', (req, res, next) => {
    controller.getItem(req, res, next)
})

router.post('/', (req, res, next) => {
    controller.addItem(req, res, next)
})

router.put('/:itemId', (req, res, next) => {
    controller.updateItem(req, res, next)
})

router.delete('/:itemId', (req, res, next) => {
    controller.removeItem(req, res, next)
})
module.exports = router 