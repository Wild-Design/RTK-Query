import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Página principal</h1>
      <div className='flex  gap-10 text-blue-500'>
        <Link href={'/countries'}>Countries</Link>
      </div>
    </main>
  );
}
