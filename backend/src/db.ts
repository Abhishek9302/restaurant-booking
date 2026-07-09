import { Pool } from 'pg';

const dbUrl = process.env.DATABASE_URL || '';

const pool = new Pool({
  connectionString: dbUrl || undefined,
  ssl: dbUrl.includes('rds.amazonaws.com') ? { rejectUnauthorized: false } : false,
});

pool.on('error', (err) => {
  console.error('Database pool error:', err.message);
});

export default pool;
