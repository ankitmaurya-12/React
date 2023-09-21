import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import King from './king'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Code & Ankit Vite</h1>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
     

     <King/>
    </>
  )
}

export default App
