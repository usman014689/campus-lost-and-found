import { Router } from 'express';

const router = Router();

// Placeholder root — auth and item routes will be added in later phases
router.get('/', (_req, res) => {
  res.json({
    message: 'Campus Lost & Found API',
    version: '0.1.0',
  });
});

export default router;
