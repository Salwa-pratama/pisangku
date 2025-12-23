import { memo } from "react";
import { SiGrab, SiShopee } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import shooPieFood from "@/public/assets/shoopie.png";
const Section2Home = () => {
  return (
    <section className="">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 flex flex-col justify-between gap-10">
        <div className="flex  items-center justify-center gap-8 flex-col lg:flex-row">
          <h2 className=" text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900  md:text-4xl">
            Tunggu <span className="text-yellow-500">apa lagi ?</span>
          </h2>
          <Link
            href="/page/contact"
            className="group  relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-32"
          >
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Order Now
            </div>
            <div className="absolute right-3.5">
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
        </div>
        <div className="flex flex-col items-center">
          <p className=" text-xl  tracking-tight leading-tight text-center text-gray-500  md:text-xl">
            Tersedia juga di
          </p>
          <div className="flex flex-row gap-10 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 items-center justify-center">
            <a href="#" className="flex justify-center items-center">
              <SiGrab className="text-green-600 text-5xl" />{" "}
              <span className="text-green-600 font-bold text-2xl">Food</span>
            </a>
            {/* Ganti Shopee icon dengan gambar */}
            <a href="#" className="flex justify-center items-center gap-2">
              <Image
                src={shooPieFood}
                alt="Shoopie"
                width={120} // sesuaikan ukuran
                height={120} // sesuaikan ukuran
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Section2Home);
