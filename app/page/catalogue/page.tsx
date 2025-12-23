"use client";
import { memo } from "react";
import { delay, motion, Variants } from "framer-motion";
// Components
import ProductCard from "@/components/card/ProductCard";
import VarianSection from "@/components/sections/VarianSection";
import Section2Home from "@/components/sections/Section2Home";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.8,
      ease: "easeIn",
      when: "beforeChildren", // ⬅️ PENTING
      delayChildren: 0.4, // ⬅️ card mulai SETELAH fade selesai
      staggerChildren: 0.25, // ⬅️ muncul satu-satu
    },
  },
};

const Catalogue = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-20 flex flex-col items-center">
        <h1 className="font-bold text-4xl text-center">
          <span className="text-yellow-500"> product</span> kami
        </h1>
        <p className="justify-center text-center max-w-[550px]">
          Beberapa Aneka Camilan Pisang yang kami sediangkan untuk menemani
          liburmu, ngumbul bareng dengan teman maupun keluarga mu jadi lebih
          asik
        </p>
      </div>
      <ProductCard />

      {/* Section 2 */}
      <VarianSection />
      {/* Section 3 */}
      <Section2Home />
    </motion.div>
  );
};

export default memo(Catalogue);
