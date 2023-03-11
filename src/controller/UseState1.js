const Rota1 = require('./Rota1');

function MinhaFuncao() {
  Rota1.res.type('txt').send('Hello World!'); // Utilizando o objeto "res" disponibilizado pelo objeto "Rota1"
}