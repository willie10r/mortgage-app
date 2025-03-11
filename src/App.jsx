
import './App.css'


function App() {


  return (
    //react needs a empty div to render
    <>
      <header>
        <h1 className='font-bold'>Mortgage Calculator</h1>
        <button>Clear All</button>
      </header>
      <ul>
        <li>
          <h3>Mortgage Amount</h3>
          <input></input>
        </li>
        <li>
          <ul>
            <li>
              <h3>Mortgage Term</h3>
              <input></input>
            </li>
            <li>
              <h3>Interest Rate</h3>
              <input></input>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <button>Repayment</button>
            </li>
            <li>
              <button>Interest Only</button>
            </li>
          </ul>
        </li>
      </ul>
      <button>Calculate Repayments</button>
      <footer>
        <h2>Results shown here</h2>
        <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </footer>
      
    </>
  )
}

export default App
