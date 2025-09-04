export default function InputBox({ amount, setAmount }) {
  return (
    <input
      className="box"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Enter amount"
    />
  );
}
