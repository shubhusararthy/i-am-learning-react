import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('darkgray')

  return (
    <>
      <div className='w-full h-screen duration-150 rounded-md' style={{ backgroundColor: color }}>
        {/* Title and Buttons Container */}
        <div className='fixed flex flex-col items-center justify-center bottom-16 inset-x-0 px-4'>
          {/* Title */}
          <h1 className='font-black text-3xl mb-4 text-center text-cyan-900'>A background changing website</h1>
          {/* Buttons */}
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('gray')} className='outline-dashed outline-cyan-900 px-4 py-1 rounded-full shadow-lg'>
              Dark
            </button>
            <button onClick={() => setColor('lightgray')} className='outline-dashed outline-cyan-900 px-4 py-1 rounded-full shadow-lg'>
              Light
            </button>
            <button onClick={() => setColor('darkgray')} className='outline-dashed outline-cyan-900 px-4 py-1 rounded-full shadow-lg'>
              Revert Back
            </button>
            <button onClick={() => setColor('cyan')} className='outline-dashed outline-cyan-900 px-4 py-1 rounded-full shadow-lg'>
              Crazy
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
