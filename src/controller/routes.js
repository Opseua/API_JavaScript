// Modulos necessários
const express = require('express');
const bodyParser = require('body-parser');
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

const Rota1 = require('./Rota1');
// Rotas para as requisições 'esperar-sim'.
router.post("/*/:id", bodyParser.text(), Rota1.post);


module.exports = router;


