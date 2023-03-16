import fetch from 'node-fetch';
import axios from 'axios';
import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3333;

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

  // esperar: SIM | resultado no response
  if (rota == 'esperar-sim') {
    try {
      const inf1 = body.replace('//<SCRIPT_CONCLUIDO_esperar-nao_1>', ';return fim_res;//<SCRIPT_CONCLUIDO_esperar-nao_1>');
      const fim_res = await Run.Script1(inf1);
      var res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
      var res_run = `<resposta>${bl}${fim_res}${bl}</resposta>`;
    } catch (e) {
      var res_api = `<script>Script1</script>${bl}<status>ERRO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
      var res_run = `<resposta>${bl}DEU ERRO: ${e.message}${bl}</resposta>`;
    }
    const res_body = id == '1' ? `<body>${bl}${body}${bl}</body>` : `<body>VAZIO-[0]</body>`;
    const res_tudo = `${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`;
    res.send(res_tudo);
    console.log(`## ↓ esperar-sim ↓ ##${bl}${res_run}${bl}## ↑ esperar-sim ↑ ##`);
    return;
  }

  // esperar: NAO | resultado na API
  if (rota == 'esperar-nao') {
    const res_api = `<script>Script1</script>${bl}<status>AGUARDANDO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
    const res_run = `<resposta>AGUARDANDO</resposta>`;
    const res_body = id == '1' ? `<body>${bl}${body}${bl}</body>` : `<body>VAZIO-[0]</body>`;
    const res_tudo = `${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`;
    res.send(res_tudo);
    console.log(`## ↓ esperar-nao ↓ ##${bl}${res_run}${bl}## ↑ esperar-nao ↑ ##`);
    try {
      const fim_res = await Run.Script1(body);
    } catch (e) {
      var fim_res = `${e.message}`;
      const fim_link = body.match(/<SCRIPT_CONCLUIDO_esperar-nao_1>(.*?)<SCRIPT_CONCLUIDO_esperar-nao_2>/ms)[1];
      eval(fim_link)
    }
    return;
  }

  res.send('ROTA/ID NAO ENCONTRADOS!');
  return;
});


app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});