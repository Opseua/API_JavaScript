const axios = require('axios');

const Run = {

    Teste1: async (inf1, inf2) => {
        try {
            console.log("TESTE");
            var teste = "casa";
            console.log(teste);
            console.log(1 + 1);
        } catch (error) {
            return "ERRO AO EXECUTAR 'TesteScript1'"
        }
    },

    Script1: async (inf1, inf2) => {
        console.log("RUN 1");
        try {
            console.log("RUN 2");
            const result = await new Promise((resolve) => {
                resolve(eval(inf1));
            });
            console.log("RUN 3");
            return result;

        } catch (error) {

            // RETORNAR ERRO 'esperar-nao'. DEFINIR O LINK DE RESPOSTA
            if (inf2 == "esperar-nao") {
                console.log("OK");
                var fim_resposta_err = `DEU ERRO: ${error.message}`;
                var fim_link = inf1.match(/\/\*NAO_APAGAR_1\*\/(.*?)\/\*NAO_APAGAR_2\*\//)[1].replaceAll("fim_resposta", "fim_resposta_err");
                eval(fim_link);
                console.log(fim_link);
            }
            else {
                // RETORNAR ERRO 'esperar-sim'
                return `DEU ERRO: ${error.message}`;
            }
        }
    }

}

module.exports = Run;