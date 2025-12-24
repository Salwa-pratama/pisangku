"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import avatarImg from "@/public/assets/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Catalogue", href: "/page/catalogue" },
  { label: "About", href: "/page/about" },
  { label: "Order", href: "/page/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10">
      <nav className="backdrop-blur-md bg-white/60 border-b border-yellow-400/30 shadow-sm px-4 lg:px-6 py-2.5 text-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src={avatarImg}
              alt="Avatar"
              width={50}
              height={50}
              className="mr-3 h-8 sm:h-9"
            />
            <span className="text-xl font-semibold">Pisangku</span>
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* NAV LINKS */}
          <div
            className={`${
              open ? "flex" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1 ml-auto`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)} // auto close
                      className={`block py-2 pr-4 pl-3 lg:p-0 transition-colors
                        ${
                          isActive
                            ? "text-yellow-500"
                            : "text-gray-700 hover:text-yellow-500"
                        }
                      `}
                    >
                      {item.label}

                      {/* underline */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400
                          transition-transform duration-300 origin-left
                          ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }
                        `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
