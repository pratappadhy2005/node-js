import express from 'express';
import { login, logout, onboard, signup } from '../controllers/auth.controller.js';
import { protectroute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/onboarding', protectroute, onboard)

export default router;