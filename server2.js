const http = require('http');
const bodyParser = require('body-parser');

const axios = require('axios');
const Run = require('./src/controller/Run.js');
const bl = `
`;

const server = http.createServer((req, res) => {

  // Configurando o body-parser para processar o corpo da solicitação como texto
  bodyParser.text()(req, res, () => {

    const url1 = (req.url.slice(-1) == "/") ? req.url : `${req.url}/`
    const url2 = url1.split("/");
    const rota = (url2.length > 2) ? `${url2[1]}` : `VAZIO-ROTA`
    const id = (url2.length > 3) ? `${url2[2]}` : `VAZIO-ID`
    const body = (Object.keys(req.body).length > 0) ? `${req.body}` : `VAZIO-BODY`

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Obrigado por sua solicitação!');

    setTimeout(() => {
      const res_api = `<script>Script1</script>${bl}<status>AGUARDANDO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
      const res_run = `<resposta>AGUARDANDO</resposta>`;
      const res_body = `<body>VAZIO-[0]</body>`;
      Run.Script1(body, "esperar-nao")
        .then((resultado) => {
          console.log(`RESULTADO FINAL: ${resultado}`)
        })



      console.log('Continuando a execução do código...');
    }, 5000);




    /*     // Enviando o corpo da solicitação como resposta do servidor
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Body da solicitação: ${body}`); */
  });
});

server.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});
