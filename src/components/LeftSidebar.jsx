import React from 'react';

const categories = [
  'All',
  'Electronics',
  'Wallets',
  'Books',
  'Documents',
  'Clothing',
  'Keys',
];

const tags = ['ID Card', 'Phone', 'Charger', 'Laptop', 'Bike Key', 'USB'];

const dateFilters = ['Today', 'Last 7 Days', 'This Month'];

const LeftSidebar = ({
  onSearch,
  onCategoryChange,
  onTagSelect,
  onDateFilterChange,
}) => {
  return (
    <div className="space-y-6">

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">🔍 Search Items</h3>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Categories */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-3">🗂️ Categories</h3>
        <ul className="space-y-2 text-sm">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(cat)}
                className="w-full text-left px-3 py-1 hover:bg-blue-50 rounded-md transition"
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* User Profile Card */}
      <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
          U
        </div>
        <div>
          <h4 className="font-semibold">Username</h4>
          <p className="text-xs text-gray-500">Logged in</p>
        </div>
      </div>

      {/* Date Filter */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-3">📅 Date Filter</h3>
        <div className="space-y-2 text-sm">
          {dateFilters.map((label) => (
            <button
              key={label}
              onClick={() => onDateFilterChange(label)}
              className="w-full text-left px-3 py-1 hover:bg-blue-50 rounded-md"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-3">🏷️ Popular Tags</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect(tag)}
              className="bg-gray-200 hover:bg-blue-100 text-gray-700 px-3 py-1 rounded-full transition"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Notices */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow text-sm text-yellow-900">
        <h4 className="font-bold mb-1">📢 Notice</h4>
        <p>
          If you’ve lost a document, report it to admin at <strong>help@lostfound.com</strong>
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
