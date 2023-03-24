import { Squares2X2Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link
          href={"https://mail.google.com"}
          target="_blank"
          className="hover:underline"
        >
          Gmail
        </Link>
        <Link
          href={"https://image.google.com"}
          target="_blank"
          className="hover:underline"
        >
          Images
        </Link>
        <Squares2X2Icon className="h-10 w-10 bg-transparent hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-100 hover:shadow-md transition-shadow duration-200">
          Sign in
        </button>
      </div>
    </header>
  );
}
