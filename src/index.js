const express = require('express');
const itensRoutes = require('./routes/itensRoutes')
const pedidosRoutes = require('./routes/pedidosRoutes')
const pedidosItensRoutes = require('./routes/pedidosItensRoutes')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/itens', itensRoutes)
app.use('/pedidos', pedidosRoutes)
app.use('/pedidositens', pedidosItensRoutes)

app.get('*', (req, res)=> res.status(200).send({
    message: 'bem vindo a API burger queen'
}));

const port = process.env.port || 3000;

app.listen(port, () =>{
    console.log('Server On')
});
