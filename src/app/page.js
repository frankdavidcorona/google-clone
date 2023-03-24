import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          priority
          src={"/google_banner.png"}
          alt="google image"
          width={200}
          height={100}
          className="h-auto w-auto"
        />

        <HomeSearch />
      </div>
    </>
  );
}
