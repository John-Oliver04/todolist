import React from 'react'

export default function Calculator() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 text-white">
      <a href='/'>Back</a>
        <div className='p-3 border border-slate-800'>
          <h1 className='text-2xl m-5 text-center'>Calculate</h1>
          <div className='flex'>
            <input className='text-orange-700 p-2' type='text'/>
            <button className='p-4 bg-orange-500 hover:bg-orange-600 w-20'>=</button>
          </div>
          
          <div>
            <div className='flex mt-5'>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>1</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>2</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>3</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border w-16'>/</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border w-16'>x</button>

            </div>
            <div className='flex'>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>4</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>5</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>6</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border w-16'>+</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border w-16'>-</button>

            </div>
            <div className='flex'>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>7</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>8</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border px-6'>9</button>
              <button className='p-4 bg-orange-500 hover:bg-orange-600 border-slate-800 border w-32 '>0</button>

            </div>
          </div>

        </div>
    </div>
  )
}
