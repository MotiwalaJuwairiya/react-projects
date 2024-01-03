export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    )
  const numItems = items.length
  const itemPacked = items.filter((item) => item.packed).length
  const percentage = Math.round((itemPacked / numItems) * 100)
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? 'You got everything! Ready to go ✈️'
            : ` 🎒 You have ${numItems} items on your list and you already packed
              ${itemPacked} (${percentage}%)`}
        </em>
      </footer>
    </>
  )
}
