'use client';

import React from 'react'
import TodoBox from './components/TodoBox'

export default function Home() {

  const itemTemplate = { action: 'add', id: null, title: '' };

  const [items, setItems] = React.useState([]);
  const [item, setItem] = React.useState(itemTemplate);

  const getAll = async () => {
    let tempItems: any = await fetch("http://localhost:3000/api/todos", { cache: 'no-store' });
    tempItems = await tempItems.json();

    if (!tempItems.success) {
      setItems([]);
      alert('Error Occurred!');
    }

    setItems(tempItems.data);
  }

  const addItem = async () => {
    if (item.title == "" || item.title == null) {
      alert("Error Occurred!");
    } else {
      let tempItems: any = await fetch(`http://localhost:3000/api/todos`,
        {
          cache: 'no-store',
          headers: {
            'Content-type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ title: item.title })
        }
      );
      tempItems = await tempItems.json();

      if (!tempItems.success) {
        alert('Error Occurred!');
      } else {
        getAll();
        setItem({ ...item, title: '' });
      }
    }
  }

  const deleteItem = async (id: number) => {
    if (confirm("Are u sure, you want to delete this item?")) {
      let tempItems: any = await fetch(`http://localhost:3000/api/todos/${id}/delete`, { cache: 'no-store' });
      tempItems = await tempItems.json();

      if (!tempItems.success) alert('Error Occurred!');

      getAll();
    }
  }

  const resetItem = () => {
    setItem(itemTemplate);
  }


  const updateItem = async () => {
    if (item.action == 'add' && (item.title == "" || item.title == null) && (item.id == null || item.id == 0)) {
      alert("Error Occurred!");
    } else {
      let tempItems: any = await fetch(`http://localhost:3000/api/todos/${item.id}`,
        {
          cache: 'no-store',
          headers: {
            'Content-type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ title: item.title })
        }
      );
      tempItems = await tempItems.json();

      resetItem();

      if (!tempItems.success) {
        alert('Error Occurred!');
      } else {
        getAll();
      }
    }
  }


  React.useEffect(() => {
    getAll();
  }, [])

  return (
    <div className='flex flex-col gap-4 m-4'>
      <h1 className='w-full text-center text-5xl font-bold'>Todo App</h1>
      <hr />
      <input
        value={item.title}
        onChange={(e) => setItem({ ...item, title: e.target.value })}
        className='border-gray-300 border-2 rounded-md p-2'
        type="text"
        placeholder='Enter your todo here...'
      />
      <div className="flex flex-row gap-2">
        {item.action === "edit" && (item.id !== null || item.id !== 0) ?
          <>
            <button className='w-fit bg-gray-800 rounded-lg p-2 px-4 text-white' onClick={updateItem}>Update</button>
            <button className='w-fit bg-gray-800 rounded-lg p-2 px-4 text-white' onClick={resetItem}>Reset</button>
          </>
          : <button className='w-fit bg-gray-800 rounded-lg p-2 px-4 text-white' onClick={addItem}>Add</button>
        }
        <button className='w-fit bg-gray-800 rounded-lg p-2 px-4 text-white' onClick={getAll}>Refresh</button>
      </div>

      <div>
        {items.map((item: any, index: number) =>
          <TodoBox
            title={item.title}
            onEdit={() => setItem({ ...item, action: 'edit', id: item.id, title: item.title })}
            onDelete={() => deleteItem(item.id)}
          />
        )}

      </div>


    </div>
  )
}