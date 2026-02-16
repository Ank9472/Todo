import { Component, useState } from 'react'
import {Navbar} from  './components/Navbar' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <div className="bg-red-600">
        <div className="container"
        >
  
        </div>
      </div>
     </>
  )
}

export default App
