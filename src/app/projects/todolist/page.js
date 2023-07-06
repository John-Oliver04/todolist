import React from 'react'

export default function Todos() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 text-white">
        <div>
            <a href='/'> Back</a>
        </div>
        <div className='p-10 m-5 border w-1/2 border-gray-500 rounded-sm'>
            {/* Header of Todo */}
            <h1 className='text-lg text-center mb-14'>TodoList App</h1>

            {/* Input  */}
            <div className='flex-row flex justify-center'>
                <input type='text' className='rounded p-2 text-blue-500'/><button  className='p-1 ml-1 text-sm text-white bg-blue-600 rounded w-14 hover:bg-blue-700'>Add</button>
            </div>

            {/* List */}
            <ul className='mt-5'>
                
                <li className='flex mt-1 '>
                    <div className='mt-5 mr-5'>
                        <p className='p-1 bg-orange-600 text-white w-7 rounded-full text-center  border-l-4 border-orange-800'>
                            1
                        </p>
                    </div>
                    <div className='border rounded border-gray-100  hover:bg-slate-800 w-full overflow-hidden'>
                        <div className='flex justify-between flex-row p-2'>
                            <div>
                                <p className='text-lg'>Meeting to Mr. Tarcena</p>
                            </div>
                            <div>
                                <button className='p-1 ml-5 text-sm text-white bg-orange-600 rounded w-14 hover:bg-orange-700'>Edit</button>
                                <button className='p-1 ml-1 text-sm text-white bg-red-600 rounded w-7   hover:bg-red-700'>x</button>
                            </div>
                        </div>
                        <p className='text-xs bg-blue-500 text-slate-300 p-1'>July 1, 2023</p>
                    </div>
                </li>
                
                <li className='flex mt-1 '>
                    <div className='mt-5 mr-5'>
                        <p className='p-1 bg-orange-600 text-white w-7 rounded-full text-center  border-l-4 border-orange-800'>
                            2
                        </p>
                    </div>
                    <div className='border rounded border-gray-100  hover:bg-slate-800 w-full overflow-hidden'>
                        <div className='flex justify-between flex-row p-2'>
                            <div>
                                <p className='text-lg '>Magmine Every 3:00 PM</p>
                            </div>
                            <div>
                                <button className='p-1 ml-5 text-sm text-white bg-orange-600 rounded w-14 hover:bg-orange-700'>Edit</button>
                                <button className='p-1 ml-1 text-sm text-white bg-red-600 rounded w-7   hover:bg-red-700'>x</button>
                            </div>
                        </div>
                        <p className='text-xs bg-blue-500 text-slate-300 p-1'>July 2, 2023</p>
                    </div>
                </li>
                
                <li className='flex mt-1 '>
                    <div className='mt-5 mr-5'>
                        <p className='p-1 bg-orange-600 text-white w-7 rounded-full text-center  border-l-4 border-orange-800'>
                            3
                        </p>
                    </div>
                    <div className='border rounded border-gray-100 hover:bg-slate-800 w-full overflow-hidden'>
                        <div className='flex justify-between flex-row p-2'>
                            <div>
                                <p className='text-lg '>Fighting! Inspire yourself!</p>
                            </div>
                            <div>
                                <button className='p-1 ml-5 text-sm text-white bg-orange-600 rounded w-14 hover:bg-orange-700'>Edit</button>
                                <button className='p-1 ml-1 text-sm text-white bg-red-600 rounded w-7   hover:bg-red-700'>x</button>
                            </div>
                        </div>
                        <p className='text-xs bg-blue-500 text-slate-300 p-1'>July 3, 2023</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
