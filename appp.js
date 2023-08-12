import React from 'react';
import './appp.css';

function appp() {
  const menuItems = [
    {
      name: 'Lemon Pasta',
      description: 'Delicious pasta with lemon-infused sauce.',
      price: '$12.99',
    },
    {
      name: 'Citrus Salad',
      description: 'Fresh salad with a mix of citrus fruits.',
      price: '$9.99',
    },
    {
      name: 'Lemonade Spritzer',
      description: 'Refreshing lemonade spritzer.',
      price: '$3.99',
    },
  ];

  return (
    <div className="appp">
      <header className="appp-header">
        <h1>Little Lemon Restaurant</h1>
      </header>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default appp;
