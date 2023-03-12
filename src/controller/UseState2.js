const axios = require('axios');


axios.post(`https://api-javascript.cyclic.app/outra-instancia/1`, body, { headers: { 'Content-Type': 'text/plain' }, timeout: 5000 })
  .then(response => { console.log("ENVIADO PARA O OUTRO SERVIDOR"); }).catch(error => { console.error(error); });