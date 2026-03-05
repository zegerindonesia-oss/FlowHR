import express from 'express';
import cors from 'cors';
import { db } from './db';
import { employees } from './db/schema';
import { eq } from 'drizzle-orm';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'FlowHR API is running' });
});

// Dummy Authentication Endpoint
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // In a real app, you would hash the incoming password and compare.
        // We compare raw for this initial test based on the PRD dummy setup.
        const user = await db.select().from(employees).where(eq(employees.email, email)).get();

        if (!user || user.passwordHash !== password) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        // Return mock token and user details
        res.json({
            token: `mock-jwt-token-for-${user.id}`,
            user: {
                id: user.id,
                role: user.role,
                fullName: user.fullName,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Mock fetch current user
app.get('/api/employees/me', async (req, res) => {
    // In a real app, this would extract the user ID from the Authorization header (JWT).
    // For now we just return a stub or require an ID.
    const { userId } = req.query;

    if (!userId || typeof userId !== 'string') {
        res.status(400).json({ error: 'Mock User ID required in query' });
        return;
    }

    try {
        const user = await db.select().from(employees).where(eq(employees.id, userId)).get();
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
