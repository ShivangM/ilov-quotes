import { getRandomQuote } from '@/lib/getRandomQuote';
import GenerateQuoteButton from './GenerateQuoteButton';

const GenerateQuote = async () => {
  // const quote: String = await getRandomQuote();

  return (
    <section
      title="Generate Quote"
      className="flex flex-col justify-center items-center text-white p-16 bg-black opacity-70 text-center lg:max-w-md  xl:max-w-lg 2xl: max-w-xl space-y-8"
    >
      <h1 className="text-5xl">Daily Inspiration Generator</h1>
      <p className="text-lg">
        Looking for a splash of inspiration? Generate a quote card with a random
        inspiration quote and share it with your friends.
      </p>
      <GenerateQuoteButton />
    </section>
  );
};

export default GenerateQuote;
