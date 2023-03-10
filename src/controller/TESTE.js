var axios = require('axios');
var resultado = 'OLÁ TUDO BEM?\r\nCASA\r\n\r\n\r\nAAA';

var config = { method: 'post', url: 'https://ntfy.sh/OPSEUA', headers: { 'Content-Type': 'text/plain' }, data: resultado };
axios(config)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));