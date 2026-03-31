import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DrinkCard from './DrinkCard';

const drinksData = [
  { id: 1, name: 'Айран 0.25',   price: '1 200', image: null },
  { id: 2, name: 'Айран 0.5',    price: '1 800', image: null },
  { id: 3, name: 'Кока-Кола',    price: '900',   image: null },
];

function Drinks() {
  return (
    <div>
      <Header />

      <div className="drinks container">
        <h1 className="drinks-title">Напитки</h1>
        <div className="drink-list">
          {drinksData.map((drink) => (
            <DrinkCard
              key={drink.id}
              name={drink.name}
              price={drink.price}
              image={drink.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Drinks;