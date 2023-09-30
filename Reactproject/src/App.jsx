import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import TextForm from './components/TextForm'

function App() {

  return (
    <>
    <Navbar></Navbar>
      {/* <Navbar title="TextUtils" search="Find"/> */}
    
    <div className="container my-4">
    <TextForm heading="Enter the text to Analyze" />  
    </div>
    </>
  )
}

export default App
