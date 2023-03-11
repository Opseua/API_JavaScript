


const { spawn } = require('child_process');
const childProcess = spawn('node', ['code2.js', body, body]);

childProcess.stdout.on('data', (data) => {
    const resultado = data.toString().trim();
    console.log(`${resultado}`);
  });
