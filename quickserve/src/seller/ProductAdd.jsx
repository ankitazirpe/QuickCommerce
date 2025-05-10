import React, { useState } from "react";

const AddProduct = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    stock: "",
    category: "",
    image: null,
    imagePreview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({
        ...product,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(product);
    }
    console.log("Product Submitted:", product);
  };

  return (
    <div className="p-6 w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              min="1"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              min="0"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border px-2 py-1 rounded-md"
            />
            {product.imagePreview && (
              <img
                src={product.imagePreview}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover rounded-md"
              />
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="4"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-[#9e0059] text-white py-2 rounded-md hover:bg-[#ff7d00] transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
