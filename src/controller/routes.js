// Modulos necessários
const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();

// GET Mensagem de erro caso não informe a rota
router.get("*", (req, res) => {
    res.json({
        status: "error",
        message: "Usar o método 'POST' e informar o script no 'body'!"
    });
});

// PUT Mensagem de erro caso não informe a rota
router.put("*", (req, res) => {
    res.json({
        status: "error",
        message: "Usar o método 'POST' e informar o script no 'body'!"
    });
});

// PATCH Mensagem de erro caso não informe a rota
router.patch("*", (req, res) => {
    res.json({
        status: "error",
        message: "Usar o método 'POST' e informar o script no 'body'!"
    });
});

// DELETE Mensagem de erro caso não informe a rota
router.delete("*", (req, res) => {
    res.json({
        status: "error",
        message: "Usar o método 'POST' e informar o script no 'body'!"
    });
});

// POST Mensagem de erro caso não informe a rota #################
router.post("/", (req, res) => {
    res.json({
        status: "error",
        message: "Informar a rota e o script no 'body'!"
    });
});

// Rotas para as requisições 'rota1''.
const Rota1 = require('./Rota1');
/* router.get("/usuarios/", Rota1.getAll);
router.get("/usuarios/:id", Rota1.getOne); */
router.post("/rota1/:id", bodyParser, Rota1.post);
/* router.put("/usuarios/:id", bodyParser, Rota1.put);
router.delete("/usuarios/:id", Rota1.delete); */

// Exporta o módulo
module.exports = router;


