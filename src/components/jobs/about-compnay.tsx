import Image from "next/image";

const AboutCompany = () => {
  return (
    <div className="py-10 pl-20 flex gap-8 flex-col">
      <div className="flex gap-2 items-center">
        <Image
          src="/square-logo.svg"
          alt="footer-user-logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-medium text-[#4f4f4f]">Atlassian</h1>
      </div>
      <div className="flex gap-8 max-w-2xl w-full justify-between text-[#4f4f4f]">
        <div className="space-y-6">
          <div>
            <h1 className="text-[#888888]">Company size</h1>
            <div className="font-medium pt-1">1k - 2k Employee</div>
          </div>
          <div>
            <h1 className="text-[#888888]">Sector</h1>
            <div className="font-medium pt-1">Information Technology, Infrastructure</div>
          </div>
          <div>
            <h1 className="text-[#888888]">Founded In</h1>
            <div className="font-medium pt-1">2019</div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-[#888888]">Type</h1>
            <div className="font-medium pt-1">Private</div>
          </div>
          <div>
            <h1 className="text-[#888888]">Funding</h1>
            <div className="font-medium pt-1">Bootstrap</div>
          </div>
          <div>
            <h1 className="text-[#888888]">Founded By</h1>
            <div className="font-medium pt-1">Scott Farquhar, Mike Cannon-Bookes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
