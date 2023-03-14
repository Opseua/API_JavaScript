// Use port number from the PORT environment variable or 3000 if not specified
import express from 'express';
const port = process.env.PORT || 3000;

const app = express();

// ...Express setup code...

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
