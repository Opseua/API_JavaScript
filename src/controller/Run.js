const Run = {

    Teste1: async (inf1) => {
        try {
            console.log("TESTE");
            var teste = "casa";
            console.log(teste);
            console.log(1 + 1);
        } catch (error) {
            return "ERRO AO EXECUTAR 'TesteScript1'"
        }
    },



    Script1: async (inf1) => {
        try {
            return eval(inf1)
        } catch (error) {
            return "ERRO AO EXECUTAR 'RunScript1'"
        }
    }

}

/* var script =
    `

console.log("TESTE");
var teste = "casa"
console.log(teste);
console.log(1+1)

`
funcoes.PegarPeloId(script) */


/* var js = 
`
// ################################ INI ################################



console.log("1")
console.log("2")
let teste = "casa"
console.log(teste)

// ################################ FIM ################################
`

// ################################ RUN ################################ 
var retorno = eval(js)*/
module.exports = Run;