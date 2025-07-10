import express from 'express';
import morgan from 'morgan';

const PORT = 3000;

const app = express();
app.use(morgan('dev'));

app.get('/api/hello', async (req, res) => {
	res.json({
		message: 'Hello Express',
	});
});

app.get('/api/error', async (req, res) => {
	throw new Error('Error endpoint');
});

app.listen(PORT, () => {
	console.log(`Othello application started: http://localhost:${PORT}`);
});
