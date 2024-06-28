const About = () => {
  return (
    <div className="pl-20 border-b py-10">
      <h1 className="text-[#888888] font-medium">About the job</h1>
      <div className="pt-2 text-[#3d3d3d] flex flex-col space-y-1">
        <span>1. Handle the UI/UX research design</span>
        <span>
          2. Work on researching on latest web applications design & trends
        </span>
        <span>3. Work on conceptualizing and visualizing</span>
        <span>
          4. Work on creating graphics content and other graphics related works
        </span>
        <span>Benefits: </span>
        <ul className="list-disc pl-6">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <span>Schedule: </span>
        <ul className="list-disc pl-6">
          <li>Day shift</li>
        </ul>
        <span>Supplementary pay types: </span>
        <ul className="list-disc pl-6">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <span>Work location: In person</span>
      </div>
    </div>
  );
};

export default About;
