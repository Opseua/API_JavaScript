import fetch from 'node-fetch';
import axios from 'axios';

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
            return await eval(inf1);
        }
        catch (error) {
            throw new Error(`${error.message}`);
        };
    },






    z_NAO_USAR: () => {
        console.log("NÃO USAR!")
    }
}

export default Run;