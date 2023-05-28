import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import icon from "../assets/404.svg"
import Image from 'next/image';

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "What's the most used language in programming? Profanity.",
  "What do you call a programmer from Finland? Nerdic.",
  "Why did the programmer go broke? Because he lost his domain in a bet.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers prefer to work at night? Because the sun can't throw exceptions.",
  "Why do C# and Java developers keep breaking their keyboards? Because they use a strongly typed language.",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25.",
  "What's a developer's favorite mode of transportation? Git push bike.",
  "Why did the developer go broke? Because he lost his cache.",
  "Why do programmers prefer iOS development? Because they don't like to Kotlin.",
  "Why did the developer get stuck in the shower? The shampoo bottle said, 'Lather, Rinse, Repeat,' but he just kept debugging.",
  "Why did the programmer get thrown out of school? He was caught using improper exceptions.",
  "Why do programmers prefer dark chocolate? It's a byte healthier.",
  "Why do Java developers wear glasses? Because they can't C#.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "Why did the web developer go broke? Because he lost his cache.",
  "Why did the programmer go broke? He lost his domain name in a bet.",
  "Why did the programmer always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why did the programmer go broke? Because he lost his domain.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "A SQL query walks into a bar, walks up to two tables and asks...",
  "To understand recursion, you must first understand recursion.",
  "Why did the developer go broke? Because he lost his cache.",
  "Why do programmers prefer dark mode? It's easier on the syntax.",
  "Why did the programmer get thrown out of school? He was caught trying to use improper classes.",
  "How do you comfort a JavaScript bug? You console it!",
  "What's a programmer's favorite hangout place? Foo Bar!",
  "Why did the developer get stuck in the shower? The bottle of shampoo had directions for 'lather, rinse, repeat,' but he kept trying to debug it."
];

const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};

const NotFound = () => {
  const [currentJoke, setCurrentJoke] = useState('');

  useEffect(() => {
    setCurrentJoke(getRandomJoke())
  }, []);
  

  const generateRandomJoke = () => {
    const joke = getRandomJoke();
    setCurrentJoke(joke);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image src={icon} alt={''}/>
      <h1 className="text-4xl font-bold mb-4 text-zinc-950">
        404 - Page Not Found
      </h1>
      <p className="text-lg mb-6 text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Button href="/" variant="primary">
        Go to Home Page
      </Button>
      <div className="mt-8 flex flex-col w-1/3 items-center">
        <p className="text-gray-700">{currentJoke}</p>
        <button onClick={generateRandomJoke} className="underline underline-offset-2 hover:brightness-110">
          Generate Joke
        </button>
      </div>
    </div>
  );
};

export default NotFound;
