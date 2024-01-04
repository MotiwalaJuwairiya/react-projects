export default function Total({ billValue, AvgTip }) {
  const tip = Number((AvgTip / 100) * billValue)
  const totalBill = Number(billValue) + Number(tip)

  return (
    <h2>
      <em>
        You pay ${totalBill} (${billValue} + ${tip}tip)
      </em>
    </h2>
  )
}
