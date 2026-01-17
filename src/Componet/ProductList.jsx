import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {products.map((p) => (
        <div key={p._id} className="border p-3 rounded">
          <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded" />
          <h3 className="font-bold mt-2">{p.title}</h3>
          <p>{p.description}</p>
          <p className="text-yellow-500 font-semibold">${p.price}</p>
          <p className="text-gray-500 text-sm">{p.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
