// Código secundário
process.on('message', message => {
  console.log(`Recebido do processo pai: ${message}`);
});

process.send('Rodando');

// Código secundário continuará rodando indefinidamente, mesmo após o processo pai encerrar
