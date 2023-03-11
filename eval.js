process.stdin.on('data', (data) => {
    const result = eval(data.toString());
    console.log(result);
});
