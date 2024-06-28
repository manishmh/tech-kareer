import Image from "next/image"

const Skills = () => {
  return (
    <div className="flex gap-28 pl-20 border-b py-6 text-[#3d3d3d] ">
        <div className="space-y-2">
            <h1 className="text-[#888888]">Skills Required</h1>
            <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                <Image src="/fimga.svg" alt="figma-logo" width={16} height={16}/>
                Figma
            </div>
            <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                <Image src="/illustrator.svg" alt="figma-logo" width={16} height={16}/>
                Adobe Illustrator
            </div>
            <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                <Image src="/xd.svg" alt="figma-logo" width={16} height={16}/>
                Adobe XD
            </div>
        </div>
        <div>
            <h1 className="text-[#888888]">Preferred Language</h1>
            <div className="font-medium pt-1">Engish</div>
        </div>
        <div>
            <h1 className="text-[#888888]">Type</h1>
            <div className="font-medium pt-1">Full time</div>
        </div>
        <div>
            <h1 className="text-[#888888]">Years of Experience</h1>
            <div className="font-medium pt-1">3+ years of Experience</div>
        </div>
    </div>
  )
}

export default Skills