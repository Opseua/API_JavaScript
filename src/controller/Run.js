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
        try {
            console.log("OUTRO PROCESSOOO 1");
            const result = await eval(inf1);
            console.log("OUTRO PROCESSOOO 2");
            return result;
        }
        catch (error) {
            // RETORNAR ERRO 'esperar-nao'. DEFINIR O LINK DE RESPOSTA
            if (inf2 == "esperar-nao") {
                var fim_resposta_err = `DEU ERRO: ${error.message}`;
                var fim_link = inf1.match(/\/\*NAO_APAGAR_1\*\/(.*?)\/\*NAO_APAGAR_2\*\//)[1].replaceAll("fim_resposta", "fim_resposta_err");
                eval(fim_link);
            }
            return `DEU ERRO: ${error.message}`;
        };
    },






    z_NAO_USAR: () => {
        console.log("NÃO USAR!")
    }
}

module.exports = Run;