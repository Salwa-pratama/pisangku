"use client";
import { memo } from "react";

import { motion } from "framer-motion";
import ProductCard from "@/components/card/ProductCard";
import avatarImg from "@/public/assets/pisangGoreng.png";
import avatarImg2 from "@/public/assets/pisangNugget.png";
import avatarImg3 from "@/public/assets/pisangRoll.png";

export const products = [
  {
    image: avatarImg,
    title: "Pisang Goreng Cokelat",
    description:
      "Pisang yang digulung menggunakan kulit lumpia, digoreng lalu dibaluri cokelat",
    price: "6K",
  },
  {
    image: avatarImg2,
    title: "Pisang Nugget",
    description: "Pisang nugget crispy dengan berbagai pilihan topping",
    price: "8K",
  },
  {
    image: avatarImg3,
    title: "Pisang Roll",
    description: "Pisang roll renyah dengan isian cokelat lumer",
    price: "7K",
  },
];

const Catalogue = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mb-10">
        <span className="text-yellow-500"> product</span> kami
      </h1>
      <ProductCard />
    </div>
  );
};

export default memo(Catalogue);
