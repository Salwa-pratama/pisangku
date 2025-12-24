"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import avatarImg from "@/public/assets/pisangNugget.png";
import { INFO_CARDS } from "@/app/models/LinksHome";
import Section2Home from "@/components/sections/Section2Home";
import Link from "next/link";
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
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            <span className="text-yellow-500"> Pisang Goreng </span>,{" "}
            <span className="text-gray-800">
              Pisang Roll & Pisang Nugget Gurih, Manis, Bikin Nagih{" "}
            </span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Dibuat dari pisang pilihan, digoreng fresh setiap hari. Cocok buat
            cemilan keluarga dan teman nongkrong.
          </p>

          <Link
            href="/page/catalogue"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-yellow-500 px-6 font-medium text-white mr-4"
          >
            <span>Lihat Menu</span>
            <div className="ml-1 transition group-hover:translate-x-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>

          <Link
            href="/page/contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium"
          >
            <div className="inline-flex h-12 translate-y-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-y-[150%]">
              Order sekarang !
            </div>
            <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-gray-800 px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
              Lets Go !
            </div>
          </Link>

          <div
            className="

          flex flex-col lg:flex-row  gap-10    mt-10"
          >
            {INFO_CARDS.map((item) => (
              <div
                key={item.id}
                className="
                transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]
                w-full border hover:cursor-pointer  p-2 items-center flex flex-col rounded-md shadow-md"
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
      {/* <Section2Home /> */}
    </motion.div>
  );
};

export default memo(Home);
