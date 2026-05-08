import React, { useEffect, useState } from 'react';

export default function App() {
  const [price, setPrice] = useState('Loading...');

  useEffect(() => {
    fetch('YOUR_RAILWAY_URL')
      .then(res => res.json())
      .then(data => {
        setPrice(data.live?.price || 'No Data');
      });
  }, []);

  return (
    <div style={{
      background:'#020509',
      color:'#00ffaa',
      height:'100vh',
      padding:'40px',
      fontFamily:'Arial'
    }}>
      <h1>AlphaNode PRO v10</h1>

      <h2>BTCUSDT Live Price</h2>

      <div style={{
        fontSize:'42px',
        fontWeight:'bold'
      }}>
        ${price}
      </div>
    </div>
  );
}