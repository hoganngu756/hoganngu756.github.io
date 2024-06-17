import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="border border-red-500">column 1</div>
        <div className="border border-black col-span-2">column 2</div>
        </div>
    </>
  )
}

export default App
