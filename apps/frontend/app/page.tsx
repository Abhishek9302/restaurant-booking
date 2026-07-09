import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <h1>Welcome to Our Restaurant</h1>
      <Link href="/booking">Book a Table</Link>
    </div>
  );
}