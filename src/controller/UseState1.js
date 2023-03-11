// Código principal
const { fork } = require('child_process');

const child = fork('./src/controller/UseState2.js');

child.on('message', message => {
  console.log(`Recebido do processo filho: ${message}`);
});

child.send('Iniciar');
