async function Api(inf1, inf2) {
    try {
        const result = await eval(inf1);
        return process.stdout.write(`${result}`);
    }
    catch (error) {
        // RETORNAR ERRO 'esperar-nao'. DEFINIR O LINK DE RESPOSTA
        if (inf2 == "esperar-nao") {
            var fim_resposta_err = `DEU ERRO: ${error.message}`;
            var fim_link = inf1.match(/\/\*NAO_APAGAR_1\*\/(.*?)\/\*NAO_APAGAR_2\*\//)[1].replaceAll("fim_resposta", "fim_resposta_err");
            eval(fim_link);
        }
        return process.stdout.write(`DEU ERRO: ${error.message}`);
    };
}
Api(process.argv[2], process.argv[3])

