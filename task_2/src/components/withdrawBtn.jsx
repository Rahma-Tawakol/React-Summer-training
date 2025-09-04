export default function WithdrawBtn({ onWithdraw }) {
  return (
    <button className="btn" onClick={onWithdraw}>
      Withdraw
    </button>
  );
}
