const fs = require('fs');
const https = require('https');
const express = require('express');
const helmet = require('helmet');

const app = express();

const PORT = 3000;

app.use(helmet());

app.get('/', (req, res) => {
	return res.status(200).send('helooooo');
});

https
	.createServer(
		{
			key: fs.readFileSync('key.pem'),
			cert: fs.readFileSync('cert.pem'),
		},
		app
	)
	.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});
