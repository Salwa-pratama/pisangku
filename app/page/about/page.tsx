"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import heroImage from "@/public/assets/maskot.png";
import Image from "next/image";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <section className="bg-white py-8 antialiased  md:py-16">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
          <div className="hidden md:col-span-5 md:mt-0 md:flex">
            <Image src={heroImage} width={0} height={0} alt="Maskot"></Image>
          </div>
          <div className="content-center justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:max-w-2xl md:text-5xl xl:text-6xl">
              Sedikit Tentang
              <br />
              <span className="text-yellow-500">Pisangku</span>
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 dark:text-black md:mb-12 md:text-lg  lg:mb-5 lg:text-xl">
              <span className="text-yellow-500 italic">PISANGKU</span> berdiri pada
              bulan juni tahun 2024, merupakan usaha produk olahan pisang yang
              dikelola oleh seorang wanita asal kediri bernama Putri Rachma
              Fadilla. <span className="text-yellow-500 italic"> PISANGKU </span>
              menghadirkan beragam olahan pisang seperti Pisang Cokelat, Pisang
              Roll's, dan Pisang Nugget. Dengan varian rasa dan topping sebagai
              cita rasa yang unik dan berbeda.
            </p>
            <a
              href="#"
              className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default memo(About);
