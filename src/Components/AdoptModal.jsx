// components/AdoptModal.jsx
import React, { useEffect, useState } from 'react';

const AdoptModal = () => {
  const [count, setCount] = useState(3);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const btn = document.getElementById('countdownButton');
    if (btn) {
      btn.addEventListener('click', () => {
        setVisible(true);
        setCount(3);
      });
    }
  }, []);

  useEffect(() => {
    let interval;
    if (visible && count > 0) {
      interval = setInterval(() => {
        setCount(prev => {
          if (prev === 1) setVisible(false);
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [visible, count]);

  if (!visible) return null;

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/?size=100&id=BlnmI5EGBdss&format=png&color=000000" alt="adopt" />
          <p className="py-4 text-center">Adoption Process is Starting for Your Pet</p>
          <div className="text-2xl font-bold text-center">{count}</div>
        </div>
        <div className="modal-action flex justify-center">
          <form method="dialog">
            <button className="btn w-80 bg-[#0E7A811A] text-[#0E7A81]">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AdoptModal;
