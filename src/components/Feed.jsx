import React from 'react';
const Feed = ({ posts }) => {
    const dummyPosts = [
  {
    name: 'Lost Wallet',
    description: 'Black leather wallet with ID cards and ₹2000 cash lost near MG Road.',
    location: 'MG Road, Delhi',
    contact: '+91 9876543210',
    type: 'lost',
    timestamp: Date.now() - 10000000,
    imageURL: 'https://via.placeholder.com/400x250?text=Wallet',
  },
  {
    name: 'Found Dog',
    description: 'Golden Retriever found wandering alone in Sector 21. Seems friendly and well-groomed.',
    location: 'Sector 21, Noida',
    contact: '+91 9123456780',
    type: 'found',
    timestamp: Date.now() - 5000000,
    imageURL: 'https://via.placeholder.com/400x250?text=Dog',
  },
  {
    name: 'Lost iPhone',
    description: 'iPhone 13 lost in the metro between Rajiv Chowk and Noida City Centre.',
    location: 'Delhi Metro',
    contact: '+91 9988776655',
    type: 'lost',
    timestamp: Date.now() - 20000000,
    imageURL: 'https://via.placeholder.com/400x250?text=iPhone',
  },
  {
    name: 'Found Backpack',
    description: 'Blue Wildcraft backpack found near cafeteria. Contains books and laptop.',
    location: 'College Cafeteria',
    contact: '+91 9001122334',
    type: 'found',
    timestamp: Date.now() - 3000000,
    imageURL: 'https://via.placeholder.com/400x250?text=Backpack',
  },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {dummyPosts.length === 0 ? (
        <div className="text-center text-gray-500 col-span-full">No posts yet.</div>
      ) : (
        dummyPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border overflow-hidden"
          >
            
            <div className="relative">
              <img
                src={post.imageURL || 'https://via.placeholder.com/400x250?text=No+Image'}
                alt="Item"
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                  post.type === 'lost'
                    ? 'bg-red-500 text-white'
                    : 'bg-green-500 text-white'
                }`}
              >
                {post.type.toUpperCase()}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-800">{post.name}</h3>
                <span className="text-xs text-gray-400">
                  {new Date(post.timestamp).toLocaleString()}
                </span>
              </div>

            
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.description}</p>
              <div className="text-sm text-gray-700 space-y-1">
                <div>
                  <span className="font-medium">📞 Contact:</span> {post.contact}
                </div>
                <div>
                  <span className="font-medium">📍 Location:</span> {post.location}
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-bold">
                  U
                </div>
                <span className="text-xs text-gray-500">Posted by user</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
