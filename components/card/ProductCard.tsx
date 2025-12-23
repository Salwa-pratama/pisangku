"use client";
import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    price: "6K",
    image: avatarImg,
  },
  {
    titleMain: "Pisang",
    titleSub: "Nugget",
    price: "6K",
    image: avatarImg2,
  },
  {
    titleMain: "Pisang",
    titleSub: "Roll's",
    price: "5K",
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
    >
      {products.map((item, index) => {
        const isReverse = index % 2 === 1;

        return (
          <motion.div
            key={index}
            variants={isReverse ? slideFromRight : slideFromLeft}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }}
            // transition={{
            //   duration: 0.6,
            //   ease: "easeOut",
            //   delay: 1 + index * 8,
            // }}
            className={`flex items-stretch shadow-md max-h-96 max-w-[720px] border ${
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
            <div className="bg-yellow-950/75 flex flex-col p-4">
              <h1 className="text-2xl font-bold">
                <span className="text-yellow-400">{item.titleMain}</span>{" "}
                <span className="text-white">{item.titleSub}</span>
              </h1>

              <p className="text-white">
                Pisang yang digulung menggunakan kulit lumpia, digoreng lalu
                dibaluri dengan cokelat
              </p>

              <div className="flex items-center mt-auto">
                {isReverse && (
                  <button className="mr-auto bg-yellow-200 text-yellow-700 px-2 rounded-md">
                    Mau kak
                  </button>
                )}

                <h2 className="text-xl font-bold">
                  <span className="text-white"> Start From </span>{" "}
                  <span className="underline text-yellow-500">
                    {item.price}
                  </span>
                </h2>

                {!isReverse && (
                  <button className="ml-auto bg-yellow-200 text-yellow-700 px-2 rounded-md">
                    Mau kak
                  </button>
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
