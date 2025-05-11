const express = require('express');
const livrosRouter = require('./src/routes/livros');
const app = express();

app.use('/livros', livrosRouter);
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})