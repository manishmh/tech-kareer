import Link from "next/link";
import React from "react";

interface NavButtonProps {
  isActive: boolean;
  label: string;
  icon: React.ReactNode;
  handleNavbarItems: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  isActive,
  label,
  icon,
  handleNavbarItems,
}) => {
  return (
    <Link href={label.toLowerCase()}>
      <button
        className={`flex gap-2 items-center py-2 px-4 rounded-full font-medium 
        ${
          isActive
            ? "bg-[#dc4a2d] border-[#fcb4a5] text-white border-2"
            : "text-[#b0b0b0]"
        }
      `}
        onClick={handleNavbarItems}
      >
        {icon}
        {label}
      </button>
    </Link>
  );
};

export default NavButton;
