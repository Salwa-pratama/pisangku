"use client";
import { memo } from "react";

import { motion } from "framer-motion";
import ProductCard from "@/components/card/ProductCard";

const Catalogue = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <ProductCard />
    </motion.div>
  );
};

export default memo(Catalogue);
