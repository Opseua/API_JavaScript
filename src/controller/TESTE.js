var axios = require('axios');
var data = 'OLA';

var config = { method: 'post', url: 'https://ntfy.sh/OPSEUA', headers: { 'Content-Type': 'text/plain' }, data: data };

axios(config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });



