-- Restaurant Booking Database Schema

CREATE TABLE IF NOT EXISTS restaurants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  cuisine TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  capacity INTEGER NOT NULL DEFAULT 50,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  guest_phone TEXT,
  party_size INTEGER NOT NULL DEFAULT 2,
  reservation_date DATE NOT NULL,
  reservation_time TIME NOT NULL,
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'completed')),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed data
INSERT INTO restaurants (name, cuisine, address, phone, capacity) VALUES
  ('The Golden Fork', 'Italian', '123 Main St, New York, NY', '+1-555-0101', 80),
  ('Sakura Garden', 'Japanese', '456 Oak Ave, New York, NY', '+1-555-0102', 60),
  ('Spice Route', 'Indian', '789 Pine Rd, New York, NY', '+1-555-0103', 70)
ON CONFLICT DO NOTHING;
