const https = require('https');
const Express = require('express');
const fs = require('fs');


const app = new Express();

app.get('/', (req, res) => {
	res.status(200).send('It works!');
});

const server = https.createServer({
	key: fs.readFileSync('../certs/key.pem'),
	cert: fs.readFileSync('../certs/certificate.pem'),
}, app);

server.listen(3000, () => {
  console.log('Listen to https://localhost:3000');
});
