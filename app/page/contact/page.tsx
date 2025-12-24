"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pisangCokelat from "@/public/assets/pisangGoreng.png";
import pisangNugget from "@/public/assets/pisangNugget.png";
import pisangRoll from "@/public/assets/pisangRoll.png";
import { div, label } from "framer-motion/client";

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

const rasaList = [
  "Cokelat Glaze",
  "Strawberry Glaze",
  "Tiramisu Glaze",
  "Green Tea Glaze",
  "Vanilla SKM",
];

const topingList = [
  { name: "Oreo Bubuk", price: 2000 },
  { name: "Rainbow Meses", price: 2000 },
  { name: "Cokelat Parut", price: 2000 },
  { name: "Keju Parut", price: 2000 },
  { name: "Choco Chips", price: 2000 },
];

const mixHarga: Record<number, number> = {
  2: 1000,
  3: 2000,
  4: 3000,
};

export default function Contact() {
  const [orders, setOrders] = useState<any[]>([]);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    location: "",
  });

  const addToOrder = (product: any) => {
    setOrders([
      ...orders,
      {
        product: product.name,
        pcs: product.variants[0].pcs,
        rasaMode: "none",
        mixCount: 0,
        rasa: "",
        mixRasa: [],
        topingMode: "none",
        toping: "",
        price: product.variants[0].price,
      },
    ]);
  };

  const recalcPrice = (o: any) => {
    const product = products.find((p) => p.name === o.product);
    const base =
      product?.variants.find((v) => v.pcs === Number(o.pcs))?.price || 0;
    const toping =
      o.topingMode === "use"
        ? topingList.find((t) => t.name === o.toping)?.price || 0
        : 0;
    const mix = o.rasaMode === "mix" ? mixHarga[o.mixCount] || 0 : 0;
    return base + toping + mix;
  };

  const updateOrder = (i: number, key: string, value: any) => {
    const updated = [...orders];
    updated[i][key] = value;

    if (key === "rasaMode") {
      updated[i].rasa = "";
      updated[i].mixRasa = [];
      updated[i].mixCount = 0;
    }

    if (key === "mixCount") {
      updated[i].mixRasa = Array.from({ length: value }, () => rasaList[0]);
    }

    if (key === "topingMode" && value === "none") {
      updated[i].toping = "";
    }

    updated[i].price = recalcPrice(updated[i]);
    setOrders(updated);
  };

  const total = orders.reduce((a, b) => a + b.price, 0);

  const handleOrder = () => {
    const wa = "62895322318221";
    let text = `*Hai kak Aku mau pesen Pisang 😀*\n\n`;
    text += `Nama: ${customer.name}\n`;
    text += `Email: ${customer.email || "-"}\n`;
    text += `Lokasi: ${customer.location}\n\n`;

    orders.forEach((o, i) => {
      text += `${i + 1}. ${o.product} (${o.pcs} pcs)\n`;
      if (o.rasaMode === "single") text += `   Rasa: ${o.rasa}\n`;
      if (o.rasaMode === "mix")
        text += `   Mix Rasa: ${o.mixRasa.join(", ")}\n`;
      if (o.topingMode === "use") text += `   Toping: ${o.toping}\n`;
      text += `   Harga: Rp${o.price}\n\n`;
    });

    text += `*Total: Rp${total}*`;
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`);
  };

  const resetAll = () => {
    setOrders([]);
    setCustomer({
      name: "",
      email: "",
      location: "",
    });
  };
  const removeOrder = (index: number) => {
    const updated = [...orders];
    updated.splice(index, 1);
    setOrders(updated);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="max-w-7xl mx-auto p-4"
    >
      <h1 className="text-3xl font-bold text-center mb-6">
        Menu <span className="text-yellow-500"> Pisang </span>
      </h1>

      {/* PRODUCT */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-white p-4  rounded text-center shadow-md"
          >
            <Image src={p.image} alt={p.name} className="mx-auto w-32 h-32" />
            <h2 className="mt-2 font-semibold">{p.name}</h2>
            <button
              onClick={() => addToOrder(p)}
              className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              + Tambah
            </button>
          </div>
        ))}
      </div>

      {/* CUSTOMER */}
      <p className="mt-10">
        <span className="text-yellow-500">*</span> Isi sedikit informasi tentang
        anda :{" "}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-6 ">
        <input
          placeholder="Nama *"
          className="border p-2 rounded"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
        <input
          placeholder="Email (opsional)"
          className="border p-2 rounded"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
        <input
          placeholder="Lokasi *"
          className="border p-2 rounded"
          value={customer.location}
          onChange={(e) =>
            setCustomer({ ...customer, location: e.target.value })
          }
        />
      </div>
      <h1>
        <span className="text-yellow-500">*</span> Pilih salah satu dari produk
        untuk memunculkan list pesanan dibawah ini :{" "}
      </h1>

      {/* ORDER */}
      {orders.map((o, i) => {
        const product = products.find((p) => p.name === o.product);
        return (
          <div
            key={i}
            className="mt-6 border p-4 rounded space-y-3 shadow-mg  "
          >
            {/* HEADER */}

            <div className="flex  items-center gap-4 border-b border-b-yellow-500 pb-3">
              {product && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="rounded bg-white"
                />
              )}
              <div>
                <h3 className="font-bold">{o.product}</h3>
                <select
                  value={o.pcs}
                  onChange={(e) =>
                    updateOrder(i, "pcs", Number(e.target.value))
                  }
                  className="border p-1 rounded text-sm border-yellow-500"
                >
                  {product?.variants.map((v) => (
                    <option key={v.pcs} value={v.pcs}>
                      {v.pcs} pcs
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <h1>
              <span className="text-yellow-500">*</span> Untuk request rasa dan
              toping bisa memilih dibawah ini :{" "}
            </h1>

            <div className="flex flex-col">
              <label htmlFor="rasa">Opsi Rasa : </label>
              <select
                name="rasa"
                onChange={(e) => updateOrder(i, "rasaMode", e.target.value)}
                className="w-fit  p-1 rounded-lg text-black border-yellow-500"
              >
                <option value="none">Tidak Pakai Rasa</option>
                <option value="single">Satu Rasa</option>
                <option value="mix">Mix Rasa</option>
              </select>
            </div>
            {/* RASA */}

            {o.rasaMode === "single" && (
              <select
                onChange={(e) => updateOrder(i, "rasa", e.target.value)}
                className="p-1 rounded-lg"
              >
                {rasaList.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            )}

            {o.rasaMode === "mix" && (
              <>
                <select
                  onChange={(e) =>
                    updateOrder(i, "mixCount", Number(e.target.value))
                  }
                  className="p-1 rounded-lg text-sm"
                >
                  <option value={0}>Pilih Jumlah Mix</option>
                  {[2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      Mix {n}
                    </option>
                  ))}
                </select>
                {o.mixRasa.map((_: string, idx: number) => (
                  <select
                    key={idx}
                    onChange={(e) => {
                      const arr = [...o.mixRasa];
                      arr[idx] = e.target.value;
                      updateOrder(i, "mixRasa", arr);
                    }}
                    className="p-1 rounded-lg w-fit text-sm"
                  >
                    {rasaList.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                ))}
              </>
            )}

            {/* TOPING */}
            <div className="flex flex-col">
              <label htmlFor="toping">Opsi Toping : </label>
              <select
                name="toping"
                onChange={(e) => updateOrder(i, "topingMode", e.target.value)}
                className="w-fit border-yellow-500 px-2 rounded-lg text-black"
              >
                <option value="none">Tidak Pakai Toping</option>
                <option value="use">Pakai Toping</option>
              </select>
            </div>

            {o.topingMode === "use" && (
              <div className="flex flex-col">
                <label htmlFor="toping">Pilih Toping : </label>
                <select
                  name="toping"
                  onChange={(e) => updateOrder(i, "toping", e.target.value)}
                  className="w-fit  px-2 rounded-lg border-yellow-500"
                >
                  {topingList.map((t) => (
                    <option key={t.name}>{t.name}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="font-bold flex ">
              {/* TOMBOL SILANG */}
              <p>Rp{o.price}</p>
              <button
                onClick={() => removeOrder(i)}
                className="text-red-500 font-bold text-sm hover:text-red-500 transition ml-auto "
                aria-label="Hapus pesanan"
              >
                Cancel
              </button>
            </div>
          </div>
        );
      })}

      {orders.length > 0 && (
        <div className="mt-6 space-y-4">
          {/* TOTAL */}
          <div className="flex justify-between items-center bg-yellow-950 text-white p-4 rounded font-bold text-lg">
            <span>Total Harga</span>
            <span>Rp{total.toLocaleString("id-ID")}</span>
          </div>

          {/* ACTION */}
          <p>
            {" "}
            <span className="text-yellow-500">* </span>Lengkapi data anda untuk
            lanjut order
          </p>
          <div className="flex gap-3">
            <button
              disabled={!customer.name || !customer.location}
              onClick={handleOrder}
              className="bg-green-500 text-white px-6 py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed "
            >
              Order via WhatsApp
            </button>

            <button
              onClick={resetAll}
              className="bg-red-500 text-white px-6 py-3 rounded"
            >
              Bersihkan Orderan
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
