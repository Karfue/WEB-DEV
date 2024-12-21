import express from 'express';
import generateShortUrl from '../controllers/urlControllers.js';

const router = express.Router();

// POST route for creating short URLs
router.post('/url', generateShortUrl);

export default router;
