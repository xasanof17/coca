"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/assets";
import { FaWalking } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const coca = true;
const walkin = false;

const variants = {
  base: "px-4 lg:px-6 py-4 flex items-center justify-between",
  menu: "fixed top-0 left-0 w-full z-60 bg-slate-50",
};

const CocaNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className={` ${variants.base} ${toggleMenu && variants.menu}`}>
      <div className="flex items-center">
        <Link href="/dashboard">
          <div className="relative w-[130px] h-[45px]">
            <Image fill src={Logo} alt="Coca" className="object-cover" />
          </div>
        </Link>
        <div className="mx-4 md:mx-6 w-[2px] h-14 bg-lightGrey" />
        <p className="text-primary text-base md:text-lg font-semibold">
          Dashboard
        </p>
      </div>
      <div className="md:hidden flex items-center justify-center">
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className="flex items-center p-2 rounded-full bg-slate-100"
        >
          {toggleMenu ? (
            <MdClose className="w-6 h-6 text-black" />
          ) : (
            <FiMenu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>
      <div className="hidden md:flex items-center space-x-7">
        <div className="flex items-center rounded-full border border-lightGrey">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 py-[10px] px-8 hover:bg-lightGrey rounded-l-full duration-300 transition-all"
          >
            <FaWalking className="text-[24px] text-secondary" />
            <span className="text-base font-normal text-primary">Walk-In</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 py-[10px] px-8 hover:bg-lightGrey rounded-r-full duration-300 transition-all"
          >
            <ImSpoonKnife className="text-[22px] text-secondary" />
            <span className="text-base font-normal text-primary">Dine-In</span>
          </Link>
        </div>
        <div className="relative w-11 h-11 rounded-full">
          <Image
            fill
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4tDxZ9obXEFhdzK9N6Yf8LRb11FZAZw5PviiB_xS&s"
            alt="user image"
            className="object-cover rounded-full"
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed top-20 left-0 h-screen w-screen bg-white backdrop-blur-md text-black -z-10">
          <div className="flex flex-col items-center space-x-7">
            <div className="flex items-center rounded-full border border-lightGrey">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 py-[10px] px-8 hover:bg-lightGrey rounded-l-full duration-300 transition-all"
              >
                <FaWalking className="text-[24px] text-secondary" />
                <span className="text-base font-normal text-primary">
                  Walk-In
                </span>
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 py-[10px] px-8 hover:bg-lightGrey rounded-r-full duration-300 transition-all"
              >
                <ImSpoonKnife className="text-[22px] text-secondary" />
                <span className="text-base font-normal text-primary">
                  Dine-In
                </span>
              </Link>
            </div>
            <div className="relative w-11 h-11 rounded-full">
              <Image
                fill
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4tDxZ9obXEFhdzK9N6Yf8LRb11FZAZw5PviiB_xS&s"
                alt="user image"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
const Walkin = () => {
  return <header></header>;
};
function Navbar() {
  return <>{coca ? <CocaNavbar /> : <Walkin />}</>;
}
export default Navbar;
