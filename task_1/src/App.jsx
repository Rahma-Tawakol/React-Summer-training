import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState([]);

  const ATM = () => {
    let x = parseInt(amount);
    if (isNaN(x) || x <= 0) {
      setResult(["Enter a valid amount"]);
      return;
    }

    let bills = [200, 100, 50, 20, 10, 5, 1];
    let output = [];

    for (let i = 0; i < bills.length; i++) {
      let count = Math.floor(x / bills[i]);
      if (count > 0) {
        output.push(`${bills[i]} x${count}`);
        x -= bills[i] * count;
      }
    }

    setResult(output);
  };

  return (
    <div>
      <h1>ATM</h1>
      <div className='container'>
        <input
          className='box'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button className='btn' onClick={ATM}>Withdraw</button>
      </div>

      {result.length > 0 && (
        <div>
          <p><b>Bills:</b></p>
          {result.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}