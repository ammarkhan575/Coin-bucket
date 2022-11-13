// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./components/Coin";
import Column from "./components/Column";
import Header from "./components/Header";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) =>{
    setSearch(e.target.value);
  }

  const keypress = ()=>{
    
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type='text' placeholder="Search" className="coin-input" value={search}  onChange={handleChange}/>
        </form>
      </div>
      <Column/>
      {filteredCoins.map((coin) => {
        return (
          <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        );
      })}
    </div>
    </>
  );
}

export default App;
