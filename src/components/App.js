import { useState } from 'react'
import BillInput from './BillInput'
import ServiceInput from './ServiceInput'
import Total from './Total'

function App() {
  const [totalBill, setTotalBill] = useState('')
  const [percentageOne, setPercentageOne] = useState(0)
  const [percentageTwo, setPercentageTwo] = useState(0)

  function handleReset() {
    setTotalBill('')
    setPercentageOne(0)
    setPercentageTwo(0)
  }
  return (
    <div>
      <BillInput totalBill={totalBill} onTotalBill={setTotalBill} />
      <ServiceInput percentage={percentageOne} onSelect={setPercentageOne}>
        How did you like the service?{' '}
      </ServiceInput>
      <ServiceInput percentage={percentageTwo} onSelect={setPercentageTwo}>
        How did your friend like the service?{' '}
      </ServiceInput>

      {totalBill > 0 && (
        <>
          <Total
            billValue={totalBill}
            AvgTip={(Number(percentageOne) + Number(percentageTwo)) / 2}
          />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  )
}

export default App
