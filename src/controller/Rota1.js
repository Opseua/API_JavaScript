const axios = require('axios');
var xml = require('xml');
const Run = require('./Run');

// Objeto "controllerer" para a entidade "usuarios" do banco de dados.
const Rota1 = {

  post: async (req, res) => {

    // ######################################## ROTA 1 ########################################
    if (req.url.match(/\/rota1\//)) {

      // DEVOLVER O BODY: ########### NÃO ###########
      if (req.url == "/rota1/0") {
        try {


          const xmlResponse = `<status>OK</status>`;
          axios.get(`https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=fd5ced3a0e0d48cd841a319c4032d81f&text=web=:=${xmlResponse}&deviceId=ce8bb2c8fd3b420e9897d14310a16041`)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
          res.text("ola");

        } catch (error) {
          res.type('xml').send(xml(`<status>ERRO</status>`));
        }
      };

      // DEVOLVER O BODY: ########### SIM ###########
      if (req.url == "/rota1/1") {
        try {

          console.log(req);
          res.json({ status: "ok", "url": req.url, "body": req.body, "retorno": "retorno do script aqui" });

        } catch (error) {
          res.json({ status: "error", message: error });
        }
      }

    };
    // ######################################## ROTA 1 ########################################



  }
};

// Exporta o módulo.
module.exports = Rota1;
