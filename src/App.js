import React, { useEffect, useState } from "react";
import Coin from "./component/Coin";
import "./App.css";

function App() {
  const [listCoin, setListCoin] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  async function getCrypto() {
    const response = await fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=0",
      { method: "GET" }
    );
    const json = await response.json();
    const data = json.coins;
    setListCoin(data);
  }

  useEffect(() => {
    getCrypto();
  }, []);

  const filteredCoins = listCoin?.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="crypto-header">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
      <div className="crypto-list">
        {filteredCoins?.map((coin, key) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
