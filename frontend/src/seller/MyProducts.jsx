import { useState } from "react";

function MyProducts() {
  const [products] = useState([
    {
      id: 1,
      name: "Nike Shoes",
      category: "Footwear",
      price: 499,
      risk: "High",
    },
    {
      id: 2,
      name: "Apple iPhone 15",
      category: "Electronics",
      price: 79999,
      risk: "Low",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 1499,
      risk: "Medium",
    },
  ]);

  const getRiskColor = (risk) => {
    switch (risk) {
      case "High":
        return "bg-red-100 text-red-600";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-600";
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Products</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full">

          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Risk</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">₹{product.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(
                      product.risk
                    )}`}
                  >
                    {product.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default MyProducts;