async function MinhaFuncao() {
    console.log("1");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("2");
    await new Promise(resolve => setTimeout(resolve, 1000));
    var soma1 = 0;
    var soma2 = 6;
    await new Promise(resolve => setTimeout(resolve, 1000));
    var res = soma1+soma2;
    return res
    }
    
    MinhaFuncao()
    