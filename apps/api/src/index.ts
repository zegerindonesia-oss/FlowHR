import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: ['http://localhost:5173', 'https://flow-hr-liard.vercel.app'],
    credentials: true, // required by better-auth for cookies
}));
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'FlowHR API is running with Postgres & Better Auth' });
});

// Better Auth routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
