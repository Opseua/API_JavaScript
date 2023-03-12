const axios = require('axios');


const aios_body = 'Conteúdo do corpo da requisição';

axios.post(`http://localhost:3000/esperar-nao/1`, body, { headers: { 'Content-Type': 'text/plain' } })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
