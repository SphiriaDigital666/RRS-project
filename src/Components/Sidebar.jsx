import React, { useState } from "react";
import bgImage from './bg.png';

const Sidebar = () => {
  // State to keep track of the selected link
  const [selectedLink, setSelectedLink] = useState('');

  // Handle link click
  const handleLinkClick = (name) => {
    setSelectedLink(name);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className="w-[300px] bg-green-600 text-white h-screen p-4 flex flex-col"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Sidebar links */}
        <nav className="flex flex-col space-y-4 mt-[100px]">
          <a
            href="#"
            className="text-lg hover:text-green-400 transition-colors"
            onClick={() => handleLinkClick('Inventory')}
          >
            Inventory
          </a>
          <a
            href="#"
            className="text-lg hover:text-green-400 transition-colors"
            onClick={() => handleLinkClick('Setting')}
          >
            Setting
          </a>
          <a
            href="#"
            className="text-lg hover:text-green-400 transition-colors"
            onClick={() => handleLinkClick('Play to Mint')}
          >
            Play to Mint
          </a>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6">
        {/* Display the selected link as the page topic */}
        <h1 className="text-3xl font-bold text-green-600">
          {selectedLink || 'Select a topic from the sidebar'}
        </h1>

        {/* You can add more content based on the selected link here */}
        
      </div>
    </div>
  );
};

export default Sidebar;
