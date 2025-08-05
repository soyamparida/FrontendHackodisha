import React, { useState } from 'react';

const PostForm = ({ onPost }) => {
  const [form, setForm] = useState({
    type: 'lost',
    name: '',
    description: '',
    contact: '',
    location: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.contact || !form.location) return;

    const post = {
      ...form,
      imageURL: form.image ? URL.createObjectURL(form.image) : null,
      timestamp: new Date()
    };

    onPost(post);

    setForm({
      type: 'lost',
      name: '',
      description: '',
      contact: '',
      location: '',
      image: null
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <div className="flex space-x-4 mb-6">
        {['lost', 'found'].map((option) => (
          <button
            key={option}
            onClick={() => setForm({ ...form, type: option })}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              form.type === option ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            placeholder="E.g., Black Wallet"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            rows={3}
            placeholder="Short description of the item"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Owner Contact</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            placeholder="Email or Phone"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Lost/Found Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            placeholder="Location where item was lost or found"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {form.image && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(form.image)}
              alt="preview"
              className="h-32 w-32 object-cover rounded-lg border"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit {form.type === 'lost' ? 'Lost' : 'Found'} Item
        </button>
      </form>
    </div>
  );
};

export default PostForm;
