import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import InputBox from "./components/inputBox";
import WithdrawBtn from "./components/withdrawBtn";
import BillsList from "./components/billsList";

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
      <Header />
      <div className="container">
        <InputBox amount={amount} setAmount={setAmount} />
        <WithdrawBtn onWithdraw={ATM} />
      </div>
      <BillsList result={result} />
    </div>
  );
}
