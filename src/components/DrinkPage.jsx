import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function DrinkPage() {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    fetch(`https://22d610f8eb606a26.mokky.dev/drinks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDrink(data);
      });
  }, [id]);

  if (!drink) {
    return 
  }

  return (
    <div>
      <Header />

      <div className="drink-page">
        <div className="container">
          <a href="/">← Назад</a>
          <img src={drink.image} alt={drink.name} width="300" height="300" />
          <h1>{drink.name}</h1>
          <h2>{drink.price} ₸</h2>
          <button className="add-to-cart">В корзину</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DrinkPage;
