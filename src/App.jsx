import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './components/Root'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Root/>
    </>
  )
}

export default App
