"use client";
import { useState } from 'react';
import { fetcher } from '@/src/api';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetcher('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Booking successful! Reference: ' + response.reference_code);
    } catch (error) {
      alert('Booking failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input name="date" value={formData.date} onChange={handleChange} type="date" required />
      <input name="time" value={formData.time} onChange={handleChange} type="time" required />
      <input name="partySize" value={formData.partySize} onChange={handleChange} placeholder="Party Size" type="number" required />
      <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" />
      <button type="submit">Book Now</button>
    </form>
  );
}