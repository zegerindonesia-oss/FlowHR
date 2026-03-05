import express from 'express';
import { auth } from '../auth';

const router = express.Router();

// Mount better-auth routes under /api/auth
// The toNodeHandler is used to adapt better-auth to Express
router.all('/*', (req, res, next) => {
    // better-auth handles login, register, session, logout, etc 
    // automatically by mounting to the request path
    return auth.handler(req, res);
});

export default router;
