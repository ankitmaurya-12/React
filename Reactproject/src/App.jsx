import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {

  // const [mode, setMode] =useState(initialState)   //wheater dark mode is enabled or not

  return (
    <>
    <Navbar></Navbar>
      {/* <Navbar title="TextUtils" search="Find"/> */}
    
    <div className="container my-4">
    {/* <About/> */}
    <TextForm heading="Enter the text to Analyze" />  
    {/* <TextForm/> */}
    </div>
    </>
  )
}

export default App
