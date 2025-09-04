export default function BillsList({ result }) {
  if (result.length === 0) return null;

  return (
    <div>
      <p><b>Bills:</b></p>
      {result.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}
