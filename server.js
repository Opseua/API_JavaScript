const http = require('http');
const bodyParser = require('body-parser');
const axios = require('axios');
const Run = require('./Run.js');
const bl = `
`;

const server = http.createServer((req, res) => {
    bodyParser.text()(req, res, async () => {

        const url1 = req.url.slice(-1) == '/' ? req.url : `${req.url}/`;
        const url2 = url1.split('/');
        const rota = url2.length > 2 ? `${url2[1]}` : 'VAZIO-ROTA';
        const id = url2.length > 3 ? `${url2[2]}` : 'VAZIO-ID';
        const body = Object.keys(req.body).length > 0 ? `${req.body}` : 'VAZIO-BODY';

        if (rota == "esperar-sim") {
            var resultado = await Run.Script1(body, rota);
            const res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
            const res_run = `<resposta>${bl}${resultado}${bl}</resposta>`;
            const res_body = id == '1' ? `<body>${bl}${body}${bl}</body>` : `<body>VAZIO-[0]</body>`;
            const res_tudo = `${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`;
            res.end(`${res_tudo}`);
            console.log(`${res_tudo}${bl}${bl}ENCERROU esperar-sim`);
            return
        };

        if (rota == "esperar-nao") {
            Run.Script1(body, rota);
            const res_api = `<script>Script1</script>${bl}<status>AGUARDANDO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
            const res_run = `<resposta>AGUARDANDO</resposta>`;
            const res_body = id == '1' ? `<body>${bl}${body}${bl}</body>` : `<body>VAZIO-[0]</body>`;
            const res_tudo = `${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`;
            res.end(`${res_tudo}`);
            console.log(`${res_tudo}${bl}${bl}ENCERROU esperar-nao`);
            return
        };

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('ROTA/ID NAO ENCONTRADOS!');
        return

    });
});

server.listen(3000, () => {
    console.log('Servidor escutando na porta 3000');
});
