const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
    {
        "id": "11",
        "Título" : "Harry Potter e ordem da fênix",
        "Autor": "J. K. Rowling",
        "Editora": "Rocco",
        "Ano": "2017"
    },

     {"id": "2",
        "Título" : "Tratado de Fisiologia Médica",
        "Autor": "John E. Hall & Michel E. Hall",
        "Editora": "GEN Guanabara Koogan",
        "Ano": "2021"
        
    }
])
});

module.exports = router;