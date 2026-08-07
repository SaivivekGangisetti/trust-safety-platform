// src/seller/UploadProduct.jsx

import { useState } from "react";

function UploadProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    alert("Product submitted for AI verification.");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Upload Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border rounded-lg p-3"
          rows="5"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
}

export default UploadProduct;
