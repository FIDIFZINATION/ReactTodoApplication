import React, { useState, useEffect } from 'react';
import '../style.css'

const TodoApp = () => {

  const checkLocalStorage = () => {
    const todoList = localStorage.getItem("myTodoList")

    if (todoList) {
      return JSON.parse(todoList)
    } else {
      return []
    }
  }


  const [inputData, setInputData] = useState("")
  const [todoList, setTodoList] = useState(checkLocalStorage)
  const [isEdited, setisEdited] = useState(false)
  const [editedItem, setEditedItem] = useState("")

  const addItem = () => {
    if (!inputData) {
      alert('Please enter a todo item!')
    }
    else if (inputData && isEdited) {
      setTodoList(todoList.map((item) => {
        if (item.id == editedItem) {
          return { ...item, name: inputData }
        }
        return item;
      })
      );
      setInputData("")
      setisEdited(false)
      setEditedItem(null)

    }
    else {
      const newObject = {
        id: new Date().getTime().toString(),
        name: inputData
      }

      setTodoList([...todoList, newObject])
      setInputData("")
    }
  }

  const removeItem = (id) => {
    const updatedList = todoList.filter((item) => {
      return item.id != id
    });
    setTodoList(updatedList)
  }

  const editItem = (id) => {
    const editedItem = todoList.find((item) => {
      return item.id === id
    });
    setisEdited(true)
    setEditedItem(editedItem.id)
    setInputData(editedItem.name)
  }



  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(todoList))

  }, [todoList])



  return (
    <>
      <div className='todo-app'>
        <div className="todo-screen">
          <i className='fa fa-note-sticky ' style={{ color: 'yellow', fontSize: '100px' }}></i>
          <h1 className='my-4' style={{ color: 'yellow' }}>Add Your List Here</h1>
          <div className='todo-add'>
            <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder='Add Item' className='form-control' name="todo" id="todo-input" />
            {isEdited ?
              <button onClick={() => addItem()} className=' btn btn-primary mx-2'> <i className="fa fa-edit"></i> </button>
              :
              <button onClick={() => addItem()} className=' btn btn-primary mx-2'> <i className="fa fa-plus"></i> </button>}

          </div>

          <div className='todo-items'>
            {todoList.map((item, i) => {
              return (
                <div className='todo-item my-2' key={item.id}>
                  <span>{item.name}</span>
                  <div>
                    <i onClick={() => editItem(item.id)} className='mx-2 fa fa-edit'></i>


                    <i onClick={() => removeItem(item.id)} className='mx-2 fa fa-trash'></i>
                  </div>
                </div>)

            })}


            <button className='btn btn-light' onClick={() => setTodoList([])} >Remove All</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoApp