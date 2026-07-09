import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db';

type User = {
  id?: number;
  name: string;
  email: string;
  password_hash: string;
  created_at?: Date;
};

const authRouter = Router();

authRouter.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const password_hash = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query<User>(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password_hash]
    );
    const user = result.rows[0];
    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Signup failed' });
  }
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query<User>('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
});

export default authRouter;
