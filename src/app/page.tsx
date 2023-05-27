import GenerateQuote from '@/components/GenerateQuote';

export default function Home() {
  return (
    <main className="bg-gradient-to-r animate-gradient from-black to-cyan-400 h-screen w-screen flex flex-col justify-center items-center">
      {/* @ts-expect-error Server Component */}
      <GenerateQuote />
    </main>
  );
}
