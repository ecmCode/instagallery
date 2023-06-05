import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import icon from "../assets/404.svg";
import jokes from "../assets/jokes.json"
import Image from "next/image";

const NotFound = () => {

  const [currentJoke, setCurrentJoke] = useState("");
  
  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[randomIndex]);
  };
  
  useEffect(() => {
    getRandomJoke()
  }, []);
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-4">
      <Image src={icon} alt={""} />
      <div className="flex flex-col items-center justify-center w-1/2 md:w-1/3 h-1/2">
        <h4 className="mb-4 font-bold">
          Page Not Found
        </h4>
        <p>
          The page you are looking for does not exist.
        </p>
        <p className="text-gray-700 my-4">{currentJoke}</p>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full my-8">
          <Button href="/" variant="action">
            Go to Home Page
          </Button>
          <button
            onClick={getRandomJoke}
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
