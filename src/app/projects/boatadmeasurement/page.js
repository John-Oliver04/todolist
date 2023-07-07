import React from 'react'
import { images } from '../../../../next.config'

export default function boatAdmeasurement() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 text-white text-xs">
        <div className='mb-10'>
            <a className='' href='/'> Back</a>
        </div>
        <div className='2xl:w-1/3  xl:w-1/2 lg:w-1/2  md:w-1/2 sm:w-full w-full p-3 rounded shadow-lg border-slate-800 border'>
            <div className='text-center text-2xl '>
                <h1>Boat Admeasurement</h1>
            </div>

            
            <div className='mt-5 max-h-72 overflow-y-scroll scroll-smooth'>
                <ul className=' '>
                    <li className="border rounded-sm overflow-hidden border-slate-500 mt-1 p-3">
                        <div className=''>
                            {/* <img className='' src='/bg-list.png'/> */}
                            <div className=' top-0 flex justify-between text-center '>
                                <h5 className='text-sm font-bold'>Angels Boat - Paluan Occidental Mindoro</h5>
                                <button className='text-sm self-end bg-red-600 px-2 rounded-full hover:bg-red-700 shadow-sm'>x</button>
                            </div>
                            
                            <p className='text-xs '>July 5, 2023 : 1:00 PM</p>
                            <div className='mt-5 '>
                                <button className='p-1 shadow bg-blue-800 hover:bg-blue-900 '> Show</button>
                                <button className='p-1 shadow bg-orange-600 hover:bg-orange-700 '> Edit</button>
                            </div>
                        </div>
                    </li>
                    <li className="border rounded-sm overflow-hidden border-slate-500 mt-1 p-3">
                        <div className=''>
                            {/* <img className='' src='/bg-list.png'/> */}
                            <div className=' top-0 flex justify-between text-center '>
                                <h5 className='text-sm font-bold'>Princess Boat - Paluan Occidental Mindoro</h5>
                                <button className='text-sm self-end bg-red-600 px-2 rounded-full hover:bg-red-700 shadow-sm'>x</button>
                            </div>
                            
                            <p className='text-xs '>July 6, 2023 : 5:00 PM</p>
                            <div className='mt-5 '>
                                <button className='p-1 shadow bg-blue-800 hover:bg-blue-900 '> Show</button>
                                <button className='p-1 shadow bg-orange-600 hover:bg-orange-700 '> Edit</button>
                            </div>
                        </div>
                    </li>
                    <li className="border rounded-sm overflow-hidden border-slate-500 mt-1 p-3">
                        <div className=''>
                            {/* <img className='' src='/bg-list.png'/> */}
                            <div className=' top-0 flex justify-between text-center '>
                                <h5 className='text-sm font-bold'>Jasper Boat - Paluan Occidental Mindoro</h5>
                                <button className='text-sm self-end bg-red-600 px-2 rounded-full hover:bg-red-700 shadow-sm'>x</button>
                            </div>
                            
                            <p className='text-xs '>July 7, 2023 : 4:00 PM</p>
                            <div className='mt-5 '>
                                <button className='p-1 shadow bg-blue-800 hover:bg-blue-900 '> Show</button>
                                <button className='p-1 shadow bg-orange-600 hover:bg-orange-700 '> Edit</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex justify-end  w-1/2 py-2'>
            <input type='hidden'></input>
            <button className='p-1 mt-1 rounded bg-blue-500 hover:bg-blue-600 px-3'>Add</button>
        </div>
    </div>
  )
}
