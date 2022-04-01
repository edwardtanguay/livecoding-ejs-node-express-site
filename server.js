import express from 'express';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));

const app = express();
const port = 3039;

const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});