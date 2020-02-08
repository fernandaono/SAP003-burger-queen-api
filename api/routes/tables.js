module.exports = (app) => {

    app.get('/tables', (req, res) =>{ 
        res.send('teste')
    })

    app.get('/tables/:tableid', (req, res)=>{
        res.send('order test')
    })
    app.post('/tables', (req,res) => {
        res.send('post test')
    })
    app.put('/tables/:tableid', (req,res) =>{
        res.send('put test')
        
    })
    app.delete('/tables/:tableid', (req,res) => {
            res.send('del teste')
    })
}

