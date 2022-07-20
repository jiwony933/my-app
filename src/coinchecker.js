import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const getMovies = async () => {
    await fetch("https://api.coinpaprika.com/v1/tickers");
    const json = await response.json();
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>The Coins!! {loading ? "loading..." : `(${coins.length})`}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol} : $ {coin.quotes.USD.price} USD)
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
