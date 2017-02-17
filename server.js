const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(8080, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});
