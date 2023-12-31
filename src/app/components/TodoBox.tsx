import React from 'react'

export default function TodoBox({title, onEdit, onDelete, ...props}: any) {
    return (
        <div className='flex flex-row gap-2 justify-between items-center bg-gray-200 p-4 mb-4 rounded-lg' {...props}>
            <span className='truncate w-full text-gray-900'
            >{title}</span>
            <button className='w-fit bg-white rounded-lg p-2 px-4 text-gray-800' onClick={onEdit} >Edit</button>
            <button className='w-fit bg-white rounded-lg p-2 px-4 text-gray-800' onClick={onDelete} >Delete</button>
        </div>
    )
}
