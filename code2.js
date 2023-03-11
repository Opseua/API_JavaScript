console.log("aaaaaaaaaCODIGO 2");
console.log(process.argv[2]);


async function MinhaFuncao(inf1) {
    try {
        console.log("RODANDO");
        const result = await eval(inf1);
        console.log(result);
        return result;
    }
    catch (error) {
        console.log("DEU ERRO: " + error.message);
        // RETORNAR ERRO 'esperar-nao'. DEFINIR O LINK DE RESPOSTA
        if (inf2 == "esperar-nao") {
            var fim_resposta_err = `DEU ERRO: ${error.message}`;
            var fim_link = inf1.match(/\/\*NAO_APAGAR_1\*\/(.*?)\/\*NAO_APAGAR_2\*\//)[1].replaceAll("fim_resposta", "fim_resposta_err");
            eval(fim_link);
        }
        return `DEU ERRO: ${error.message}`;
    };
}

MinhaFuncao(process.argv[3])