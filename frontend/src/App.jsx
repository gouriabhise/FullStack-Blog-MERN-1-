import { useState } from 'react'
 
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-slate-50 min-h-screen flex flex-col">
      <nav>Navbar</nav>
      <div className='flex-grow'>
        <Outlet/>
      </div>
      <footer>Footer</footer>
         </div>
    </>
  )
}

export default App
