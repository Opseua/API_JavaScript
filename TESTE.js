async function MinhaFuncao() {

    await new Promise(resolve => setTimeout(resolve, 1000));

    var res = 11;

    //<SCRIPT_CONCLUIDO_esperar-nao_1>
    const fim_resposta = res;
    /*NAO_APAGAR_1*/var inf = { url: `https://ntfy.sh/OPSEUA`, params: { method: `POST`, headers: { "Content-Type": "text/plain" }, [(typeof UrlFetchApp !== "undefined") ? "payload" : "body"]: `${fim_resposta}` } }; var req = (typeof UrlFetchApp !== "undefined") ? UrlFetchApp.fetch(inf.url, inf.params) : fetch(inf.url, inf.params);/*NAO_APAGAR_2*/
    /*AO_APAGAR_1*/var inf = { url: `https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=fd5ced3a0e0d48cd841a319c4032d81f&deviceNames=Chrome_1&text=${fim_resposta}`, params: { method: `GET` } }; var req = (typeof UrlFetchApp !== "undefined") ? UrlFetchApp.fetch(inf.url, inf.params) : fetch(inf.url, inf.params);/*NAO_APAGAR_2*/
    //<SCRIPT_CONCLUIDO_esperar-nao_2>

    return res
}

MinhaFuncao()
