import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import icon from "../assets/404.svg";
import jokes from "../assets/jokes.json"
import Image from "next/image";

const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};

const NotFound = () => {
  const [currentJoke, setCurrentJoke] = useState("");

  useEffect(() => {
    setCurrentJoke(getRandomJoke());
  }, []);

  const generateRandomJoke = () => {
    const joke = getRandomJoke();
    setCurrentJoke(joke);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-4">
      <Image src={icon} alt={""} />
      <div className="flex flex-col items-center justify-center w-1/2 md:w-1/3 h-1/3 md:h-1/2">
        <h1 className="text-4xl font-bold mb-4 text-zinc-950">
          Page Not Found
        </h1>
        <p className="text-lg mb-6 text-zinc-950">
          The page you are looking for does not exist.
        </p>
        <Button href="/" variant="action">
          Go to Home Page
        </Button>
        <div className="my-4 flex flex-col h-full justify-center items-center">
          <p className="text-gray-700">{currentJoke}</p>
          <button
            onClick={generateRandomJoke}
            className="underline underline-offset-2 hover:brightness-110"
          >
            Generate Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
