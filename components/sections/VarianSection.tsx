import React from "react";

type ListItem = {
  label: string;
  price?: string;
};

type CardData = {
  title: string;
  description: string;
  items: ListItem[];
};

const cards: CardData[] = [
  {
    title: "Varian Rasa",
    description:
      "dibawah ini adalah beberapa varian rasa yang tersedia dan siap kamu cobain",
    items: [
      { label: "Cokelat Glaze" },
      { label: "Strawbery Glaze" },
      { label: "Tiramisu Glaze" },
      { label: "Green Tea Glaze" },
      { label: "Vanilla SKM" },
    ],
  },
  {
    title: "Mix Rasa",
    description:
      "Bisa request mix beberapa rasa juga ya sesuai dengan keinginan",
    items: [
      { label: "Mix 2 Rasa", price: "+Rp 1.000" },
      { label: "Mix 3 Rasa", price: "+Rp 2.000" },
      { label: "Mix 4 Rasa", price: "+Rp 3.000" },
    ],
  },
  {
    title: "Varian Toping",
    description: "Kurang lengkap rasanya kalau ngg pake toping",
    items: [
      { label: "Oreo Bubuk", price: "Rp 2.000" },
      { label: "Rainbow Meses", price: "Rp 2.000" },
      { label: "Cokelat Parut", price: "Rp 2.000" },
      { label: "Keju Parut", price: "Rp 2.000" },
      { label: "Choco Chips", price: "Rp 2.000" },
    ],
  },
];

// 🔥 WARNA BERDASARKAN LABEL
const getItemStyle = (label: string) => {
  const key = label.toLowerCase();

  // VARIAN RASA
  if (key.includes("cokelat")) return { backgroundColor: "#7B3F00" };
  if (key.includes("strawbery")) return { backgroundColor: "#E11D48" };
  if (key.includes("tiramisu")) return { backgroundColor: "#6B4F4F" };
  if (key.includes("green tea")) return { backgroundColor: "#15803D" };
  if (key.includes("vanilla")) return { backgroundColor: "#F5DEB3" };

  // MIX RASA
  if (key.includes("mix 2"))
    return {
      backgroundImage: "linear-gradient(90deg,#7B3F00,#E11D48)",
    };
  if (key.includes("mix 3"))
    return {
      backgroundImage: "linear-gradient(90deg,#7B3F00,#E11D48,#15803D)",
    };
  if (key.includes("mix 4"))
    return {
      backgroundImage: "linear-gradient(90deg,#7B3F00,#E11D48,#15803D,#6B4F4F)",
    };

  // TOPING
  if (key.includes("oreo")) return { backgroundColor: "#1F2937" };
  if (key.includes("meses")) return { backgroundColor: "#F97316" };
  if (key.includes("keju")) return { backgroundColor: "#FACC15" };
  if (key.includes("choco")) return { backgroundColor: "#4B2E2B" };

  return { backgroundColor: "#9CA3AF" };
};

// 🔵 ICON BULAT
const DotIcon = ({ style }: { style: React.CSSProperties }) => (
  <span className="inline-block w-3 h-3 rounded-full" style={style} />
);

const VarianSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            <span className="text-yellow-500"> Varian</span> Rasa & Toping
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Disini Kami juga menyediakan beberapa varian rasa dan varian toping
            sesuai mood dan kesukaan kalian ya temen-temen
          </p>
        </div>

        {/* CARDS */}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border-yellow-950 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]
              flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border  shadow-lg"
            >
              <h3 className="text-2xl text-yellow-800 font-semibold">
                {card.title}
              </h3>
              <p className="font-light mb-8 text-gray-500 sm:text-lg">
                {card.description}
              </p>

              <ul className="mb-8 space-y-4 text-left">
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-center ${
                      item.price ? "justify-between" : "space-x-3"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <DotIcon style={getItemStyle(item.label)} />
                      <span>{item.label}</span>
                    </div>

                    {item.price && (
                      <span className="text-sm font-medium">{item.price}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VarianSection;
