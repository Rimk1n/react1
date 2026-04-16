import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import DrinkCard from "./DrinkCard";

function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [cart, setCart] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentUrl = queryParams.get("category");

  const addToCart = (product) => {
    const tovarItem = cart.find((item) => item.id === product.id);

    if (tovarItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        let url = "https://22d610f8eb606a26.mokky.dev/drinks";

        if (currentUrl) {
          url += `?category=${currentUrl}`;
        }

        const response = await axios.get(url);
        setDrinks(response.data);
      } catch (error) {
        console.log("Ошибка при получении данных:", error);
      }
    };

    fetchDrinks();
  }, [currentUrl]);

  return (
    <div>
      <Header />

      <div className="drinks container">
        <h2>Товаров в корзине: {cart.length}</h2>
        <p>
          Общая стоимость:{" "}
          {cart.reduce((total, item) => total + item.price * item.quantity, 0)}{" "}
          ₸
        </p>
        <h1 className="drinks-title">Напитки</h1>

        <div className="drink-list">
          {drinks.map((drink) => (
            <DrinkCard
              key={drink.id}
              id={drink.id}
              name={drink.name}
              price={drink.price}
              image={drink.image}
              addToCart={() => addToCart(drink)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Drinks;
