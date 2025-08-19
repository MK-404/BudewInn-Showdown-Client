const fs = require('fs');
const https = require('https');
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const spriteDir = "/home/flame"
const certDir = "/etc/ssl"
const domain = "budewinn.it"
const sdSpriteUrl = "https://play.pokemonshowdown.com"

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', async (req, res) => {
	const requestedDir = req.path;
	const filePath = spriteDir + requestedDir;

	const exist = fs.existsSync(filePath);
	console.log(exist, filePath);

	if (requestedDir.includes("/trainers/")) {
		try {
			const response = await axios.get("https://api.budewinn.it/avatar/" + requestedDir.replace("/sprites/trainers/", ""), {
				responseType: 'arraybuffer'
			});
			res.writeHead(200);
			return res.end(response.data);
		} catch (err) {
			// opzionale: log errore
		}
	}

	if (exist) {
		res.sendFile(filePath);
	} else {
		try {
			const response = await axios.get(sdSpriteUrl + requestedDir, {
				responseType: 'arraybuffer'
			});

			res.writeHead(200);
			res.end(response.data);
		} catch (err) {
			res.writeHead(404);
			res.end();
		}
	}
});





const privateKey = fs.readFileSync(`${certDir}/private/${domain}.key`, 'utf8');
const certificate = fs.readFileSync(`${certDir}/certs/${domain}.pem`, 'utf8');

const httpsServer = https.createServer({ key: privateKey, cert: certificate }, app);

httpsServer.listen(2096, () => {
	console.log(`Ascolto https su porta: ${2096}`)
});
