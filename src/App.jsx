import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="imgpart">
        <img src="public/images/Component 27.jpg" alt="" />
      </div>
      <div className="loginpart">
        <h3>سلام آف مورری عزیز</h3>
        <h4>:نام و نام خانوادگی</h4>
        <input type="text" />
        <a href="" target='_blank' className='link'>ورود به حساب</a>
      </div>
    </div>
  )
}

export default App
