const axios = require('axios');

const Run = {

    Teste1: async (inf1) => {
        try {
            console.log("TESTE");
            var teste = "casa";
            console.log(teste);
            console.log(1 + 1);
        } catch (error) {
            return "ERRO AO EXECUTAR 'TesteScript1'"
        }
    },

    Script1: async (inf1) => {
        try {
            const result = await new Promise((resolve) => {
                resolve(eval(inf1));
            });
            return result;
        } catch (error) {
            throw new Error(`ERRO AO EXECUTAR Script1: ${error.message}`);
        }
    }

}

module.exports = Run;