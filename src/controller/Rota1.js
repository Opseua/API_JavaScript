const axios = require('axios');
const Run = require('./Run');
const bl = `
`;

const Rota1 = {

  post: async (req, res) => {
    const id = req.params.id;
    const rota = req.url.replace(`/${id}`, "").replace(`/`, "");

    // ######################################## INI - ESPERA: SIM ########################################
    if (rota == "esperar-sim") {

      // DEVOLVER O BODY: ########### NÃO ###########
      if (id == "0") {
        Run.Script1(req.body)
          .then((resultado) => {
            const res_run = `<resposta>${resultado}</resposta>`;
            const res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>${bl}<body>VAZIO-[0]</body>`;
            res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
          })
          .catch((erro) => {
            const res_run = `<resposta>${erro.message}</resposta>`;
            const res_api = `<script>Script1</script>${bl}<status>ERRO</status><rota>${rota}</rota>${bl}<id>${id}</id>${bl}VAZIO-[0]</body>`;
            res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
          });
      };

      // DEVOLVER O BODY: ########### SIM ###########
      if (id == "1") {
        Run.Script1(req.body)
          .then((resultado) => {
            const res_run = `<resposta>${resultado}</resposta>`;
            const res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>${bl}<body>${bl}${req.body}${bl}</body>`;
            res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
          })
          .catch((erro) => {
            const res_run = `<resposta>${erro.message}</resposta>`;
            const res_api = `<script>Script1</script>${bl}<status>ERRO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>${bl}<body>${bl}${req.body}${bl}</body>`;
            res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
          });
      };

    }
    // ######################################## FIM - ESPERA: SIM ########################################

    // ######################################## INI - ESPERA: NAO ########################################
    else if (rota == "esperar-nao") {

      // DEVOLVER O BODY: ########### NÃO ###########
      if (id == "0") {

        const res_run = `<resposta>AGUARDANDO</resposta>`;
        const res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>${bl}<body>VAZIO-[0]</body>`;
        res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
        Run.Script1(req.body)
          .then((resultado) => {
            axios.get(`https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=fd5ced3a0e0d48cd841a319c4032d81f&deviceNames=Chrome_1&text=TEXTO&title=${resultado}`)
              .then(response => console.log(response.data))
              .catch(error => console.error(error));
          })
          .catch((erro) => {
            const res_run = `<resposta>${erro.message}</resposta>`;
            const res_api = `<script>Script1</script>${bl}<status>ERRO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>${bl}<body>VAZIO-[0]</body>`;
            res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
          });
      };

      // DEVOLVER O BODY: ########### SIM ###########
      if (id == "1") {
        const res_run = `<resposta>AGUARDANDO</resposta>`;
        const res_api = `<script>Script1</script>${bl}<status>OK</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>${bl}<body>${bl}${req.body}${bl}</body>`;
        res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
        Run.Script1(req.body)
          .then((resultado) => {
            axios.get(`https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=fd5ced3a0e0d48cd841a319c4032d81f&deviceNames=Chrome_1&text=TEXTO&title=${resultado}`)
              .then(response => console.log(response.data))
              .catch(error => console.error(error));
          })
          .catch((erro) => {
            const res_run = `<resposta>${erro.message}</resposta>`;
            const res_api = `<script>Script1</script>${bl}<status>ERRO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>${bl}<body>${bl}${req.body}${bl}</body>`;
            res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
          });
      };

    }
    // ######################################## FIM - ROTA 1 ########################################




    else {
      const res_run = `<resposta>NENHUM!</resposta>`;
      const res_api = `<script>NENHUM!</script>${bl}<status>ERRO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>${bl}<body>VAZIO-[0]</body>`;
      res.type('txt').send(`${res_api}${bl}${bl}${res_run}`);
    }
  }
};

module.exports = Rota1;




// EXEMPLO DE BODY

/* async function MinhaFuncao() {
  console.log("1");
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("2");
  await new Promise(resolve => setTimeout(resolve, 5000));
  var soma1 = 1;
  var soma2 = 15;
  var res = soma1 + soma2;
  return res
}

MinhaFuncao() */
