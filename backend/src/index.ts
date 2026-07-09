import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import router from './routes';
import './db';

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.get('/health', (req, res) => res.json({ status: "ok", timestamp: Date.now() }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));