"use client";

import { InitialStateTypes, useNavbarContext } from "@/context/navbar-context";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import NavButton from "./nav-button";

const Navbar = ({}: {}) => {
  const { navbarItems, setNavbarItems } = useNavbarContext();
  const handleNavbarItems = (item: keyof InitialStateTypes) => {
    setNavbarItems((prevItems) => ({
      ...prevItems,
      jobs: item === "jobs",
      messages: item === "messages",
      payments: item === "payments",
    }));
  };

  return (
    <div className="flex justify-between px-8 py-4 font-sans text-base">
      <div className="flex items-center">
        <div className="bg-[#e7e7e7] text-red-500 px-6 py-3 font-medium grid place-items-center">
          Logo
        </div>
      </div>
      <div className="border rounded-full p-1.5 flex gap-6">
        <NavButton
          isActive={navbarItems.jobs}
          label="Jobs"
          icon={<IoBagHandleOutline className="text-base -translate-y-[2px]" />}
          handleNavbarItems={() => handleNavbarItems("jobs")}
        />
        <NavButton
          isActive={navbarItems.messages}
          label="Messages"
          icon={
            <div className="relative">
              <FiMessageSquare className="text-base" />
              <span className="absolute w-1 bg-red-500 aspect-square rounded-full top-0 right-0"></span>
            </div>
          }
          handleNavbarItems={() => handleNavbarItems("messages")}
        />
        <NavButton
          isActive={navbarItems.payments}
          label="Payments"
          icon={
            <FaHandHoldingDollar className="-translate-y-[1px] text-base" />
          }
          handleNavbarItems={() => handleNavbarItems("payments")}
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative text-3xl">
          <IoMdNotificationsOutline />
          <div className="w-2 aspect-square bg-red-500 rounded-full absolute right-1 top-1"></div>
        </div>
        <div>
          <Image
            src="/user.svg"
            alt="user-profile-logo"
            width={40}
            height={40}
          />
        </div>
        <div>
            <FaChevronDown className="text-base"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
