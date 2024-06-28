import { InitialStateTypes } from "@/app/jobs/layout";
import Link from "next/link";

const JobMenu = ({
  jobsMenuItem,
  handleJobsMenuItem,
}: {
  jobsMenuItem: InitialStateTypes;
  handleJobsMenuItem: (menu: keyof InitialStateTypes) => void;
}) => {
  const menuItems = [
    {
      label: "Job preview",
      isActive: jobsMenuItem.preview,
      key: "preview" as keyof InitialStateTypes,
    },
    {
      label: "Applicants",
      isActive: jobsMenuItem.applicants,
      key: "applicants" as keyof InitialStateTypes,
    },
    {
      label: "Match",
      isActive: jobsMenuItem.match,
      key: "match" as keyof InitialStateTypes,
    },
    {
      label: "Messages",
      isActive: jobsMenuItem.messages,
      key: "messages" as keyof InitialStateTypes,
    },
  ];

  return (
    <div className="flex gap-8 border pt-4 pl-20">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          isActive={item.isActive}
          handleJobsMenuItem={handleJobsMenuItem}
          menuKey={item.key}
        />
      ))}
    </div>
  );
};

export default JobMenu;

interface MenuItemProps {
  label: string;
  isActive: boolean;
  menuKey: keyof InitialStateTypes;
  handleJobsMenuItem: (menu: keyof InitialStateTypes) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  isActive,
  menuKey,
  handleJobsMenuItem,
}) => {
  return (
    <Link href={`/jobs/${menuKey}`}>
      <div
        className={`cursor-pointer text-[17px] ${
          isActive ? "text-red-500 font-semibold" : "text-[#888888]"
        }`}
        onClick={() => handleJobsMenuItem(menuKey)}
      >
        {label}
        {isActive && (
          <div className="w-1/2 h-[2px] bg-red-500 mt-4 mx-auto"></div>
        )}
      </div>
    </Link>
  );
};
