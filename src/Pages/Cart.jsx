import React, { useState } from 'react';

const initialCart = [
  {
    id: 1,
    name: 'Puppy Food - Chicken',
    price: 25,
    quantity: 1,
    image: 'https://i.ibb.co/dmpdpMb/dogfood.jpg',
  },
  {
    id: 2,
    name: 'Cat Toy - Mouse',
    price: 10,
    quantity: 2,
    image: 'https://i.ibb.co/k3rNDpw/cattoy.jpg',
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, change) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 🐾</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price} each</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="btn btn-sm"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="px-2 font-medium">{item.quantity}</span>
                <button
                  className="btn btn-sm"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>

              <div className="text-lg font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                className="btn btn-sm btn-error text-white"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-semibold">
              Total: <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </h3>
            <button className="btn btn-primary mt-4">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Cart