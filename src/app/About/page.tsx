import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-4">About Market Geek</h1>
        <div className="text-left mb-4">
          <p>Welcome to the Market Geek!</p>
          <p>This portal is about screening the right securities to take timely positions and minizie associated risks</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Get to Know Me</h2>
          <p className="text-left">I am a software developer with a strong interest in Quantitative Analysis and FinTech.</p>
          <p className="text-left">In my free time, I enjoy learning and experimenting with new technologies, particularly exploring the intersection of finance and technology and how emerging asset classes can potentially reshape the world..</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
