import React from 'react'
import './App.css'
import Headerpart from './components/headerpart'
import Firstpage from './components/mainpart'

function App() {
  return (
    <div className='scroll-px-10'>
      <Headerpart/>
      <Firstpage/>
    </div>
  )
}

export default App;
