const express = require("express");
const controladorDeUsuario = require("../controllers/controladorDeUsuario");
const rotasDeUsuario = express.Router();

rotasDeUsuario.get("/todos", controladorDeUsuario.pegarTodos);

rotasDeUsuario.get("/:id", controladorDeUsuario.pegarUmPeloID);

rotasDeUsuario.post("/cadastrar", controladorDeUsuario.cadastrar);
rotasDeUsuario.post("/conectar", controladorDeUsuario.conectar);

//fazer a rota de atualização (put)
rotasDeUsuario.put("/:id", controladorDeUsuario.atualizar);
rotasDeUsuario.delete("/:id", controladorDeUsuario.delete);

module.exports = rotasDeUsuario;

