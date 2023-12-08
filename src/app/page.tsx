import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col gap-2 m-4'>
      <h1 className='w-full text-center text-5xl font-bold'>Todo App</h1>
      <hr />
      <input
        className='border-gray-300 border-2 rounded-md p-2'
        type="text"
        placeholder='Enter your todo here...'
      />
      <button className='w-fit bg-gray-800 rounded-lg p-2 px-4 text-white'>Add</button>

      <div>
        <div className='flex flex-row gap-2 justify-between items-center bg-gray-200 p-4'>
          <span className='truncate w-full text-gray-900'
            title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae quos, quisquam sunt nemo laudantium sit cupiditate saepe explicabo laboriosam eius temporibus dicta quod numquam, dolor ipsa nesciunt quaerat iusto'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae quos, quisquam sunt nemo laudantium sit cupiditate saepe explicabo laboriosam eius temporibus dicta quod numquam, dolor ipsa nesciunt quaerat iusto?Task 1</span>
          <button className='w-fit bg-white rounded-lg p-2 px-4 text-gray-800'>Edit</button>
          <button className='w-fit bg-white rounded-lg p-2 px-4 text-gray-800'>Delete</button>
        </div>
      </div>

    </div>
  )
}
