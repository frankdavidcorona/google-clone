import { Cog8ToothIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            priority
            src={"/google_banner.png"}
            width={120}
            height={40}
            alt="google banner"
            className="w-auto h-auto"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden sm:inline-flex">
          <Cog8ToothIcon className="w-10 h-10 header-icon" />
          <Squares2X2Icon className="w-10 h-10 header-icon" />
        </div>
        <button className="ml-2 bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all duration-200 ">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
