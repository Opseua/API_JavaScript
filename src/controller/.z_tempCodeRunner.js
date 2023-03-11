        .then(response => response.json())
        .then(data => console.log("fetch: OK 1"))
        .catch(error => console.error("fetch: ERRO 1"));