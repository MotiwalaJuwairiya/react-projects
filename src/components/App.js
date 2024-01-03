import { useState } from 'react'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

export default function App() {
  const [items, setItems] = useState([])

  function handleItems(item) {
    //since we cannot change the items array
    setItems((items) => [...items, item])
  }

  function handleDelete(id) {
    setItems((items) => items.filter((items) => items.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleClearList() {
    const confirmed = window.alert('Are you sure you want to delete all items?')
    if (confirmed) setItems([])
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleItems} />
        <PackingList
          items={items}
          onDeleteItems={handleDelete}
          onToggleItem={handleToggleItem}
          onHandleClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  )
}
