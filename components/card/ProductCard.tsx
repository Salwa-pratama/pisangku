"use client";
import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import avatarImg from "@/public/assets/pisangGoreng.png";
import avatarImg2 from "@/public/assets/pisangNugget.png";
import avatarImg3 from "@/public/assets/pisangRoll.png";

const slideFromLeft = {
  hidden: { opacity: 0, x: -80, transition: { duration: 0.4 } },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 80, transition: { duration: 0.4 } },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

/* =======================
   DUMMY DATA
======================= */
const products = [
  {
    titleMain: "Pisang",
    titleSub: "Goreng Cokelat",
    description:
      "Pisang yang digulung menggunakan kulit lumpia, digoreng lalu dibaluri dengan cokelat",
    price: "6K",
    image: avatarImg,
  },
  {
    titleMain: "Pisang",
    titleSub: "Nugget",
    description:
      "Pisang nugget yang diolah dengan tepung terigu dan panir, dipadukan bumbu rahasia lalu digoreng",
    price: "5K",
    image: avatarImg2,
  },
  {
    titleMain: "Pisang",
    titleSub: "Roll's",
    description:
      "Pisang yang digulung menggunakan kulit lumpia, lalu digoreng dengan minyak panas",
    price: "6K",
    image: avatarImg3,
  },
];

const ProductCard = () => {
  return (
    <motion.div
      className="flex flex-col gap-10"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {products.map((item, index) => {
        const isReverse = index % 2 === 1;

        return (
          <motion.div
            key={index}
            variants={isReverse ? slideFromRight : slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1 + index * 8,
            }}
            className={`flex items-stretch shadow-md lg:max-h-96  h-fit  max-w-[720px] border ${
              isReverse ? "ml-auto" : ""
            }`}
          >
            {/* IMAGE LEFT */}
            {!isReverse && (
              <div className="bg-white p-6 justify-center shadow-[8px_0_0_0_rgba(0,0,0,0.25)]">
                <Image
                  src={item.image}
                  alt="mockup"
                  width={200}
                  height={400}
                  className="object-contain scale-150 origin-center"
                />
              </div>
            )}

            {/* DESCRIPTION */}
            <div className="bg-yellow-950/75 flex flex-col px-4 lg:p-4 md:p-2 sm:p-2">
              <h1 className="text-2xl font-bold">
                <span className="text-yellow-400 text-[10px] lg:text-2xl md:text-2xl sm:text-2xl">
                  {item.titleMain}
                </span>{" "}
                <span className="text-white text-[10px] lg:text-2xl md:text-2xl sm:text-2xl">
                  {item.titleSub}
                </span>
              </h1>

              <p className="text-white text-[8px] lg:text-xl md:text-xl font-thin sm:text-lg">
                {item.description}
              </p>

              <div className="flex items-center mt-auto">
                {isReverse && (
                  <Link
                    href="/page/contact"
                    className="mr-auto bg-yellow-200 text-yellow-700 px-2 rounded-md lg:text-sm md:text-sm text-[8px] sm:text-sm"
                  >
                    Mau kak
                  </Link>
                )}

                <h2 className="text-xl font-bold">
                  <span className="text-white text-[8px] lg:text-xl sm:text-xl md:text-xl">
                    {" "}
                    Start From{" "}
                  </span>{" "}
                  <span className="underline text-yellow-500 text-sm lg:text-xl sm:text-xl md:text-xl">
                    {item.price}
                  </span>
                </h2>

                {!isReverse && (
                  <Link
                    href="/page/contact"
                    className="ml-auto bg-yellow-200 text-yellow-700 px-2 rounded-md lg:text-sm text-[8px] md:text-sm sm:text-sm"
                  >
                    Mau kak
                  </Link>
                )}
              </div>
            </div>

            {/* IMAGE RIGHT */}
            {isReverse && (
              <div className="bg-white p-6 justify-center shadow-[-8px_0_0_0_rgba(0,0,0,0.25)]">
                <Image
                  src={item.image}
                  alt="mockup"
                  width={200}
                  height={400}
                  className="object-contain scale-150 origin-center"
                />
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default memo(ProductCard);
