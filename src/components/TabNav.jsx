import React from 'react';

const TabNav = ({ currentTab, onChangeTab }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {['Lost', 'Found'].map((tab) => (
        <button
          key={tab}
          onClick={() => onChangeTab(tab)}
          className={`px-4 py-2 rounded-md ${
            currentTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TabNav;
