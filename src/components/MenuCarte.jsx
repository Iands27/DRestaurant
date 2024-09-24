
import React from 'react';

const MenuItem = ({ title, description, price }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <p className="text-yellow-600 font-semibold mt-2">Rp {price}</p>
  </div>
);

const MenuCarte = () => {
  const menuItems = [
    {
      title: "Nasi Goreng",
      description: "Traditional Indonesian fried rice with a choice of chicken or seafood.",
      price: "50,000",
    },
    {
      title: "Sate Ayam",
      description: "Grilled chicken skewers served with a rich peanut sauce.",
      price: "65,000",
    },
    {
      title: "Ikan Bakar Jimbaran",
      description: "Freshly grilled fish marinated in Balinese spices.",
      price: "120,000",
    },
    {
      title: "Mie Goreng",
      description: "Stir-fried noodles with vegetables and a choice of seafood or chicken.",
      price: "55,000",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-12 min-h-32 p-16">Ala Carte Menu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCarte;
