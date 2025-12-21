"use client";

import { memo } from "react";
import avatarImg from "@/public/assets/logo.png";
import Image from "next/image";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/page/home",
    active: true,
  },
  {
    label: "Catalogue",
    href: "/page/catalogue",
  },
  {
    label: "About",
    href: "/page/about",
  },
  {
    label: "Contact",
    href: "/page/contact",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 ">
      <nav
        className="backdrop-blur-md
      bg-white/60
      border-b border-yellow-400/30
      shadow-sm px-4 lg:px-6 py-2.5 text-black"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <Image
              src={avatarImg}
              alt="Avatar"
              width={50}
              height={50}
              quality={100}
              className="mr-3 h-6 sm:h-9"
            />

            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Pisangku
            </span>
          </a>

          {/* HAMBURGER */}
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* NAV LINKS */}
          <div
            id="mobile-menu-2"
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ml-auto"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block py-2 pr-4 pl-3 rounded lg:p-0
                      ${
                        item.active
                          ? "text-black bg-primary-700 lg:bg-transparent lg:text-primary-700"
                          : "text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
