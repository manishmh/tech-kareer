import { FiMessageSquare, FiUsers } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbUserCheck } from "react-icons/tb";

const EditJob = () => {
  return (
    <div className="px-6 py-6">
      <div className="flex gap-4 font-medium">
        <button className="bg-[#fef4f2] border rounded-md border-[#dc4a2d] px-4 py-2 text-[#dc4a2d] w-1/2 flex gap-2 items-center justify-center">
          <RiDeleteBin6Line /> Delete job
        </button>
        <button className="bg-[#dc4a2d] border rounded-md border-[#f2f4f2] px-4 py-2 text-white w-1/2 flex gap-2 items-center justify-center">
          <LuPencil /> Edit job
        </button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-[#4f4f4f] border-b py-6">
          <div className="flex items-center gap-2">
            <FiUsers /> Applicants
          </div>
          <span className="font-semibold text-lg">400</span>
        </div>
        <div className="flex justify-between text-[#4f4f4f] border-b py-6">
          <div className="flex items-center gap-2">
            <TbUserCheck /> Matches
          </div>
          <span className="font-semibold text-lg">100</span>
        </div>
        <div className="flex justify-between text-[#4f4f4f] border-b py-6">
          <div className="flex items-center gap-2">
            <FiMessageSquare /> Messages
          </div>
          <span className="font-semibold text-lg">147</span>
        </div>
        <div className="flex justify-between text-[#4f4f4f] border-b py-6">
          <div className="flex items-center gap-2">
            <IoEyeOutline /> Views
          </div>
          <span className="font-semibold text-lg">800</span>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
