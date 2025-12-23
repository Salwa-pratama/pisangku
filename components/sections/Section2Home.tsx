import { memo } from "react";
import { SiGrab, SiShopee } from "react-icons/si";
const Section2Home = () => {
  return (
    <section className="bg-white shadow-lg rounded-md">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-yellow-400 md:text-4xl">
          Tersedia Juga di
        </h2>
        <div className="flex flex-row gap-10 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 items-center justify-center">
          <a href="#" className="flex justify-center items-center">
            <SiGrab className="text-green-600 text-5xl" />{" "}
            <span className="text-green-600 font-bold">Food</span>
          </a>
          <a href="#" className="flex justify-center items-center">
            <SiShopee className="text-orange-500 text-5xl" />
            <h1>Shoopie</h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Section2Home);
