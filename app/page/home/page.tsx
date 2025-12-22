"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import avatarImg from "@/public/assets/pisangNugget.png";
import { INFO_CARDS } from "@/app/models/LinksHome";
import Section2Home from "@/components/sections/Section2Home";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      {/* Section 1 */}
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            className="inline-flex bg-yellow-500 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black  dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>

          <div className="flex flex-col lg:flex-row  gap-10    mt-10">
            {INFO_CARDS.map((item) => (
              <div
                key={item.id}
                className="w-full border hover:cursor-pointer  p-2 items-center flex flex-col rounded-md shadow-md"
              >
                {item.icon}
                <p className="text-center text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={avatarImg} alt="mockup" width={800} height={800} />
        </div>
      </div>

      {/* Section 2 */}
      <Section2Home />
    </motion.div>
  );
};

export default memo(Home);
