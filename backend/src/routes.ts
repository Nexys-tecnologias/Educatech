import express, { Router } from 'express';

import UserController from './auth/UserController';

const router = Router();

router.post('users,', UserController.store);

export default router;