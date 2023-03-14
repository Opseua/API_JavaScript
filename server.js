import fetch from 'node-fetch';
import axios from 'axios';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
/* const port = (process.env.HTTPPORT > 0) ? process.env.HTTPPORT : 3000; */
const port = 3020;

import Run from './Run.js';
const bl = `
`;

const app = express();
app.use(express.text());
app.use(cors());

app.post('*', async (req, res) => {
  const url1 = req.url.slice(-1) == '/' ? req.url : `${req.url}/`;
  const url2 = url1.split('/');
  const rota = url2.length > 2 ? `${url2[1]}` : 'VAZIO-ROTA';
  const id = url2.length > 3 ? `${url2[2]}` : 'VAZIO-ID';
  const body = Object.keys(req.body).length > 0 ? `${req.body}` : 'VAZIO-BODY';

  if (rota == 'esperar-sim') {
    var resultado = await Run.Script1(body, rota);
    const res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
    const res_run = `<resposta>${bl}${resultado}${bl}</resposta>`;
    const res_body =
      id == '1' ? `<body>${bl}${body}${bl}</body>` : `<body>VAZIO-[0]</body>`;
    const res_tudo = `${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`;
    res.send(res_tudo);
    console.log(`${res_tudo}${bl}${bl}ENCERROU esperar-sim`);
    return;
  }

  if (rota == 'esperar-nao') {
    Run.Script1(body, rota);
    const res_api = `<script>Script1</script>${bl}<status>AGUARDANDO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
    const res_run = `<resposta>AGUARDANDO</resposta>`;
    const res_body =
      id == '1' ? `<body>${bl}${body}${bl}</body>` : `<body>VAZIO-[0]</body>`;
    const res_tudo = `${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`;
    res.send(res_tudo);
    console.log(`${res_tudo}${bl}${bl}ENCERROU esperar-nao`);
    return;
  }

  res.send('ROTA/ID NAO ENCONTRADOS!');
  return;
});


app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});