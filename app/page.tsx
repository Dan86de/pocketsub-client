"use client";

import HeroSection from "../components/HeroSection/HeroSection";
import RootHeader from "../components/RootHeader/RootHeader";

/**
 * App urls.
 */
export enum Endpoints {
  HOME = "/",
  BLOG = "/blog",
  SHOP = "/shop",
  ABOUT = "/about",
  CONTACT = "/contact",
  REGISTER = "/register",
  LOGIN = "/login",
  DEMO = "/demo",
  VIDEO = "https://youtube.com/@programistafrontend",
}

const IndexPage = () => {
  return (
    <div
      className="sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <RootHeader />
      <HeroSection />
    </div>
  );
};

export default IndexPage;
