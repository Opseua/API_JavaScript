const axios = require('axios');
const Run = require('./Run');
const bl = `
`;

const Rota1 = {

    post: async (req, res) => {
        const id = req.params.id;
        const rota = req.url.replace(`/${id}`, "").replace(`/`, "");
        const body = req.body;


        const res_api = `<script>Script1</script>${bl}<status>AGUARDANDO</status>${bl}<rota>${rota}</rota>${bl}<id>${id}</id>`;
        const res_run = `<resposta>AGUARDANDO</resposta>`;
        const res_body = `<body>VAZIO-[0]</body>`;
        res.write('txt').send(`${res_api}${bl}${bl}${res_run}${bl}${bl}${res_body}`);
        Run.Script1(body, "esperar-nao")
            .then((resultado) => {
                console.log(`RESULTADO FINAL: ${resultado}`)
            })

    }
};

module.exports = Rota1;



