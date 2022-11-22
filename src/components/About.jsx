import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
  Exemplary academic qualifications include a master’s Artificial Intelligence and Robotics from
the University of Hertfordshire. Excellent interpersonal and communication skills, a strong
work ethic, and the ability to effectively handle pressure without compromising quality service.
        </p>

        <br />

        <p className="text-xl">
        Web developer intern with experience in Python, JavaScript, and React. Passionate about web development and excited to learn more. Skilled in problem solving and working independently.
        </p>
      </div>
    </div>
  );
};

export default About;
