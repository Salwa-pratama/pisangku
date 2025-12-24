import pisangCokelat from "@/public/assets/pisangGoreng.png";
import pisangNugget from "@/public/assets/pisangNugget.png";
import pisangRoll from "@/public/assets/pisangRoll.png";

const products = [
  {
    name: "Pisang Cokelat",
    image: pisangCokelat,
    variants: [
      { pcs: 3, price: 6000 },
      { pcs: 4, price: 7000 },
      { pcs: 5, price: 9000 },
      { pcs: 6, price: 11000 },
    ],
  },
  {
    name: "Pisang Roll",
    image: pisangRoll,
    variants: [
      { pcs: 5, price: 6000 },
      { pcs: 6, price: 7000 },
      { pcs: 7, price: 8000 },
      { pcs: 8, price: 9000 },
    ],
  },
  {
    name: "Pisang Nugget",
    image: pisangNugget,
    variants: [
      { pcs: 3, price: 5000 },
      { pcs: 4, price: 6000 },
      { pcs: 5, price: 7000 },
      { pcs: 6, price: 9000 },
    ],
  },
];

const mixRasa = [
  {
    total: 2,
    harga: 1000,
  },
  {
    total: 3,
    harga: 1000,
  },
  {
    total: 4,
    harga: 1000,
  },
];

const VariantRasa = [
  {
    name: "Cokelat Glaze",
  },
  {
    name: "Strawberry Glaze",
  },
  {
    name: "Tiramisu Glaze",
  },
  {
    name: "Green Tea Glaze",
  },
  {
    name: "Vanilla SKM",
  },
];

const VarianToping = [
  {
    name: "Oreo Bubuk",
    price: 2000,
  },
  {
    name: "Rainbow Meses",
    price: 2000,
  },
  {
    name: "Cokelat Parut",
    price: 2000,
  },
  {
    name: "Keju Parut",
    price: 2000,
  },
  {
    name: "Choco Chips",
    price: 2000,
  },
];
