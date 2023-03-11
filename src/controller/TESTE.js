const fetch_body = `FETCH 1`;

fetch("https://ntfy.sh/OPSEUA", { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: fetch_body })
    .then(response => response.json())
    .then(data => console.log("fetch: OK"))
    .catch(error => console.error("fetch: ERRO"))
