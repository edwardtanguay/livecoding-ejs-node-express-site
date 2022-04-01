import express from 'express';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));

const app = express();
const port = 3039;

const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));

app.get('/report333', (req, res) => {
	res.sendFile(path.join(__dirname, './public/info.html'));
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public'));

app.get('/info', (req, res) => {
	res.render('info');
});

app.get('/sec123', (req, res) => {
	res.sendFile(path.join(__dirname, './secret/secret.html'));
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});