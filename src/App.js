import './App.css';
import { useState } from 'react';
import Plansza from './Plansza';
import gruszka from './img/gruszka.jpg';

let grafiki = [
  {id:1, grafika:gruszka, opis:"gruszka"},
  {id:2, grafika:gruszka, opis:"gruszka"},
  {id:3, grafika:gruszka, opis:"gruszka"}
];
let obiekty = [];
function App() {
  let [rank, setrank] = useState(Array(3).fill(0));
  function rate(id){
    let k = rank.slice();
    k[id]++;
    setrank(k);
    document.getElementById(id).innerHTML=k[id];
  }
  return (
    <div className="App">
      <h1>lajki</h1>
      
      <Plansza k={grafiki[0]} rate={()=>rate(0)} />
      <Plansza k={grafiki[1]} rate={()=>rate(1)} />
      <Plansza k={grafiki[2]} rate={()=>rate(2)} />
      <p id="0">0</p><p>Obrazek 1</p>
      <p id="1">0</p><p>Obrazek 2</p>
      <p id="2">0</p><p>Obrazek 3</p>
    </div>
  );
}



export default App;
