module.exports = (app) => {
    app.get('/products', (req, res) =>{ 
        res.send('teste')
    })

    app.get('/products/:productid', (req, res)=>{
        res.send('product test')
    })
    app.post('/products', (req,res) => {
        res.send('post test')
    })
    app.put('/products/:productid', (req,res) =>{
        res.send('put test')
    })
    app.delete('/products/:productid', (req,res) => {
            res.send('del teste')
    })
}

