async function MinhaFuncao() {

    var fetch_body = `FETCH 1`;
    fetch("https://ntfy.sh/OPSEUA", { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: fetch_body })
        .then(response => response.json())
        .then(data => console.log("fetch: OK"))
        .catch(error => console.error("fetch: ERRO"));

    console.log("111111");
    await new Promise(resolve => setTimeout(resolve, 1500));

    var fetch_body = `FETCH 2`;
    fetch("https://ntfy.sh/OPSEUA", { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: fetch_body })
        .then(response => response.json())
        .then(data => console.log("fetch: OK"))
        .catch(error => console.error("fetch: ERRO"));

    console.log("2222");
    await new Promise(resolve => setTimeout(resolve, 1500));
    var soma1 = 0;
    var soma2 = 5555;
    await new Promise(resolve => setTimeout(resolve, 1500));
    var res = (soma1 + soma2);

    var fetch_body = `FETCH 3`;
    fetch("https://ntfy.sh/OPSEUA", { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: fetch_body })
        .then(response => response.json())
        .then(data => console.log("fetch: OK"))
        .catch(error => console.error("fetch: ERRO"));

    console.log("333333");

    //<SCRIPT_CONCLUIDO_esperar-nao_1>
    const fim_resposta = res;
        /*NAO_APAGAR_1*/axios({ method: 'post', url: `https://ntfy.sh/OPSEUA`, headers: { 'Content-Type': 'text/plain' }, data: `${fim_resposta}` })/*NAO_APAGAR_2*/
        /*AO_APAGAR_1*/axios({ method: 'get', url: `https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=fd5ced3a0e0d48cd841a319c4032d81f&deviceNames=Chrome_1&text=${fim_resposta}` })/*NAO_APAGAR_2*/
    //<SCRIPT_CONCLUIDO_esperar-nao_2>

    return res
}

MinhaFuncao()