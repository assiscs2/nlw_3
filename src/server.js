// Importar as dependecias
const express = require('express');

// Iniciando o express
const server = express();

//Criar uma rota

server.get('/', function() {
    console.log('oi')

})

// Ligar o servidor
server.listen(5500)