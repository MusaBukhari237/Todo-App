import React from 'react'
import TodoBox from './components/TodoBox'

export default function Home() {
  return (
    <div className='flex flex-col gap-4 m-4'>
      <h1 className='w-full text-center text-5xl font-bold'>Todo App</h1>
      <hr />
      <input
        className='border-gray-300 border-2 rounded-md p-2'
        type="text"
        placeholder='Enter your todo here...'
      />
      <button className='w-fit bg-gray-800 rounded-lg p-2 px-4 text-white'>Add</button>

      <div>
        <TodoBox 
        title="Task 1"
        />

        <TodoBox 
        title="Task 232323"
        />
      </div>


    </div>
  )
}