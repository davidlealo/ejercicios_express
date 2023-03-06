const express = require('express')

const app = express()

app.listen(3000, () =>{
    console.log('Servidor iniciado')
})

app.get('/perfil', (req, res) =>{
    res.send('David Leal Olivares')
})