import Link from "next/link";
import { Endpoints } from "../../app/page";

const HeroSection = () => {
  return (
    <main className="mx-auto mt-16 max-w-2xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">
            A better way to manage your subscriptions
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          See how pocketsub can help you manage your recurring payments. Have
          all of them in one place and keep more money in your pocket.
        </p>
        <div className="mx-auto mt-5 flex justify-center max-w-full justify-center md:mt-8 gap-2">
          <Link
            href={Endpoints.DEMO}
            className="flex w-64 items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium md:text-xl"
          >
            Try demo
          </Link>
          <Link
            href={Endpoints.VIDEO}
            className="flex w-64  items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium md:text-xl"
          >
            Watch video
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
