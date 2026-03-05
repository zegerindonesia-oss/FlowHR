import express from 'express';
import { auth } from '../auth';
import { toNodeHandler } from "better-auth/node";

const router = express.Router();

// Mount better-auth routes under /api/auth
router.all('/*', toNodeHandler(auth));

export default router;
