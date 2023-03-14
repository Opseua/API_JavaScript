// Use port number from the PORT environment variable or 3000 if not specified
const port = process.env.PORT || 3000;

/* const http = require('http'); */

import http from 'http';
const server = http.createServer(console.log("OK"))
server.listen(port);

