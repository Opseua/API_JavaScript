const axios = require('axios');

async function MinhaFuncao() {

    console.log("1");
    var fetch_body = 'AXIOS 1';
    var response = await axios.put(`https://ntfy.sh/OPSEUA`, fetch_body, { headers: { 'Content-Type': 'text/plain' } });
    var responseBody = await response.data.message;
    console.log(responseBody);

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("2");
    var fetch_body = 'AXIOS 2';
    var response = await axios.put(`https://ntfy.sh/OPSEUA`, fetch_body, { headers: { 'Content-Type': 'text/plain' } });
    var responseBody = await response.data.message;
    console.log(responseBody);

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("3");
    var fetch_body = 'AXIOS 3';
    var response = await axios.put(`https://ntfy.sh/OPSEUA`, fetch_body, { headers: { 'Content-Type': 'text/plain' } });
    var responseBody = await response.data.message;
    console.log(responseBody);

    await new Promise(resolve => setTimeout(resolve, 2000));

    var soma1 = 0;
    var soma2 = 5555;
    var res = (soma1 + soma2);

    //<SCRIPT_CONCLUIDO_esperar-nao_1>
    const fim_resposta = res;
        /*NAO_APAGAR_1*/axios({ method: 'put', url: `https://ntfy.sh/OPSEUA`, headers: { 'Content-Type': 'text/plain' }, data: `${fim_resposta}` })/*NAO_APAGAR_2*/
        /*AO_APAGAR_1*/axios({ method: 'get', url: `https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=fd5ced3a0e0d48cd841a319c4032d81f&deviceNames=Chrome_1&text=${fim_resposta}` })/*NAO_APAGAR_2*/
    //<SCRIPT_CONCLUIDO_esperar-nao_2>

  node - v

    return res
}

MinhaFuncao()