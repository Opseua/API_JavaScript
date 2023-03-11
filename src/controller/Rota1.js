const axios = require('axios');
const Run = require('./Run');
const bl = `
`;

const Rota1 = {

  post: async (req, res) => {
    const id = req.params.id;
    const rota = req.url.replace(`/${id}`, "").replace(`/`, "");
    const body = req.body;

    // ######################################## INI - esperar-sim ########################################
    if (rota == "esperar-sim") {

      // DEVOLVER O BODY: ########### NÃO ###########
      if (id == "0") {
        Run.Script1(body, "esperar-sim")
          .then((resultado) => {
            const res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
            const res_run = `<resposta>${bl}${resultado}${bl}</resposta>`;
            const res_body = `<body>VAZIO-[0]</body>`;
            console.log(`RESULTADO FINAL: ${resultado}`)
            res.type('txt').send(`${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`);
          })
      };

      // DEVOLVER O BODY: ########### SIM ###########
      if (id == "1") {
        Run.Script1(body, "esperar-sim")
          .then((resultado) => {
            const res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
            const res_run = `<resposta>${bl}${resultado}${bl}</resposta>`;
            const res_body = `<body>${bl}${body}${bl}</body>`;
            console.log(`RESULTADO FINAL: ${resultado}`)
            res.type('txt').send(`${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`);
          })
      };

    };
    // ######################################## FIM - esperar-sim ########################################

    // ------------------------------------------------------------------------------------------------------

    // ######################################## INI - esperar-nao ########################################
    if (rota == "esperar-nao") {

      // DEVOLVER O BODY: ########### NÃO ###########
      if (id == "0") {
        const res_api = `<script>Script1</script>${bl}<status>AGUARDANDO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
        const res_run = `<resposta>AGUARDANDO</resposta>`;
        const res_body = `<body>VAZIO-[0]</body>`;
        /* res.type('txt').end(`${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`); */
        Run.Script1(body, "esperar-nao")
          .then((resultado) => {
            console.log(`RESULTADO FINAL: ${resultado}`)
          })
      };

      // DEVOLVER O BODY: ########### SIM ###########
      if (id == "1") {
        const res_api = `<script>Script1</script>${bl}<status>AGUARDANDO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
        const res_run = `<resposta>AGUARDANDO</resposta>`;
        const res_body = `<body>${bl}${body}${bl}</body>`;
        res.type('txt').send(`${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`);
        Run.Script1(body, "esperar-nao")
          .then((resultado) => {
            console.log(`RESULTADO FINAL: ${resultado}`)
          })
      };

    };
    // ######################################## FIM - esperar-nao ########################################




    if (!rota == "esperar-sim" && !rota == "esperar-nao") {
      const res_api = `<script>NENHUM!</script>${bl}<status>NENHUM!</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
      const res_run = `<resposta>NENHUM!</resposta>`;
      const res_body = `<body>NENHUM!</body>`;
      res.type('txt').send(`${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`);
      console.log(`RESULTADO FINAL: NENHUM!`)
    }
  }
};

module.exports = Rota1;




// EXEMPLO DE BODY

async function MinhaFuncao() {
  console.log("1");
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log("2");
  await new Promise(resolve => setTimeout(resolve, 1500));
  var soma1 = 0;
  var soma2 = 8;
  await new Promise(resolve => setTimeout(resolve, 1500));
  var res = "ESPEROU: " + soma1 + soma2;
  console.log("3");

  //<SCRIPT_CONCLUIDO_esperar-nao_1>
  const fim_resposta = res;
/*AO_APAGAR_1*/axios({ method: 'post', url: `https://ntfy.sh/OPSEUA`, headers: { 'Content-Type': 'text/plain' }, data: `${fim_resposta}` })/*NAO_APAGAR_2*/
/*NAO_APAGAR_1*/axios({ method: 'get', url: `https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=fd5ced3a0e0d48cd841a319c4032d81f&deviceNames=Chrome_1&text=${fim_resposta}` })/*NAO_APAGAR_2*/
  //<SCRIPT_CONCLUIDO_esperar-nao_2>

  return res
}

/* MinhaFuncao()  */

