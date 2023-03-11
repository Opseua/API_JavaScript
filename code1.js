const { spawn } = require('child_process');

const body = "teste";
const childProcess = spawn('node', ['code2.js', 'argumento1', body]);
/* childProcess.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
}); */
childProcess.stdout.on('data', (data) => {
  console.log(`Data from child process: ${data}`);
});
/* childProcess.stderr.on('data', (data) => {
  console.error(`Error from child process: ${data}`);
});
 */

