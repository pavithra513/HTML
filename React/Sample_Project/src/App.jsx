import { useState, useEffect } from "react";
import "./App.css";

function App() {

  let [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

  }, []);

  return (
    <div>

      <h1>My Store 🛍️</h1>

      <ul>

        {products.map((product) => (

          <li key={product.id}>

            <img
              src={product.image}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <p>₹ {product.price}</p>

            <p>⭐ {product.rating.rate}</p>

            <button>Add to Cart</button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;