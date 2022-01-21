import React from 'react';
import './coin.css'

function Coin({ name, icon, price, symbol }) {
  return (
    <div className='coin'>
      <div className='coin-feature'>
        <h1>{name}</h1>
        <img src={icon} alt='' />
        <h2>Price: {Math.round(price)} $</h2>
        <h3>Symbol: {symbol}</h3>
      </div>
    </div>
  )
}

export default Coin;
