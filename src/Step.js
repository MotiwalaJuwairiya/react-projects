import { useState } from 'react'
import { messages, Button } from './App'

export function Step() {
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
            <Button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              event={handlePrevious}
            >
              Previous
            </Button>
            <Button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              event={handleNext}
              text="Next"
            />

            {/* <button
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
                    </button> */}
          </div>
        </div>
      )}
    </>
  )
}
