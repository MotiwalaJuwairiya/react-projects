import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

export default function App() {
  return (
    <>
      <Counter />
      <Step />
    </>
  )
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date('December 15 2023')
  date.setDate(date.getDate() + count)

  function addStep() {
    setStep((currentStep) => currentStep + 1)
  }

  function removeStep() {
    setStep((currentStep) => currentStep - 1)
  }

  function addCount() {
    setCount((currentCount) => currentCount + step)
  }

  function removeCount() {
    setCount((currentCount) => currentCount - step)
  }
  return (
    <>
      {/* // <div>{new Date().setDate(getDate().toDateString())}</div> */}

      <div className="step">
        <button onClick={removeStep}> - </button>
        <span> Step: {step} </span>
        <button onClick={addStep}> + </button>
      </div>

      <div className="count">
        <button onClick={removeCount}> - </button>
        <span> Count: {count} </span>
        <button onClick={addCount}> + </button>
      </div>
      <span>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </>
  )
}

function Step() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep((prevState) => prevState - 1)
  }

  function handleNext() {
    if (step < 3) setStep((prevState) => prevState + 1)
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            {/*since the array starts from 0 */}
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}
