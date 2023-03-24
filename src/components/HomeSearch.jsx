"use client";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?search=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    if (!response.ok) return;
    const data = await response.json();
    setRandomSearchLoading(false);
    router.push(`/search/web?search=${data[0]}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mx-auto max-w-[90%] sm:max-w-xl lg:max-w-2xl mt-5 border border-gray-200 items-center px-5 py-3 rounded-full hover:shadow-md transition-shadow duration-200 focus:shadow-md"
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
        <input
          type={"text"}
          className="flex-grow focus:outline-none px-2"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
        <MicrophoneIcon className="w-5 h-5 text-gray-600" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row space-x-4 mt-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          className="btn flex items-center justify-center disabled:opacity-80"
          onClick={randomSearch}
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <Image
              width={100}
              height={100}
              src={"/spinner.svg"}
              className="h-4 w-4 text-center"
              alt="loading..."
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
