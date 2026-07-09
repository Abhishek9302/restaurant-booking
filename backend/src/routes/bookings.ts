import { Router } from 'express';
import pool from '../db';

const bookingsRouter = Router();

bookingsRouter.post('/', async (req, res) => {
  const { user_id, name, email, phone, party_size, booking_date, booking_time, notes } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO bookings (user_id, name, email, phone, party_size, booking_date, booking_time, notes, reference_code)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [user_id, name, email, phone, party_size, booking_date, booking_time, notes, generateReferenceCode()]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: 'Booking creation failed' });
  }
});

bookingsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM bookings WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Booking not found' });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve booking' });
  }
});

bookingsRouter.get('/availability', async (req, res) => {
  // Basic availability check can be added later.
  res.json([]); // Placeholder for available time slots.
});

function generateReferenceCode() {
  return Math.random().toString(36).substring(2, 9).toUpperCase();
}

export default bookingsRouter;
