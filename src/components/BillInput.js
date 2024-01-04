export default function BillInput({ totalBill, onTotalBill }) {
  return (
    <div>
      How much was the Bill?
      <input
        type="text"
        value={totalBill}
        onChange={(e) => onTotalBill(e.target.value)}
        placeholder=" Bill value"
      />
    </div>
  )
}
