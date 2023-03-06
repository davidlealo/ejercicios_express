const express = require('express')
const fs = require('fs')

const app = express()

app.listen(3000, () =>{
    console.log('Servidor iniciado')
})

app.get('/perfil', (req, res) =>{
    res.send('David Leal Olivares')
})

app.get('/productos', (req, res) => {
    const productos = JSON.parse(fs.readFileSync('productos.json'))
    res.json(productos)
})

app.get('/usuarios', (req, res) =>{
    const usuarios = JSON.parse(fs.readFileSync('usuarios.json'))
    res.json(usuarios)
})