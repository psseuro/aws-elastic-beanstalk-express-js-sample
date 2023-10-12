const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Psseuro, welcome you all to the new site. Please be seated.!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
