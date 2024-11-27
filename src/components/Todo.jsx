import React, { useState } from 'react'
import edit from '../images/edit.png'
import trash from '../images/trash.png'
import check from '../images/check.png'
import '../css/Todo.css'


function Todo({todo,onRemoveTodo,onUpdateTodo}) {

  const {id,content}=todo

  const [editTable,setEditTable]=useState(false)
  const [newTodo,setNewTodo]=useState(content)

  const removeTodo=()=>{
    onRemoveTodo(id)
  }

  const updateTodo=()=>{
    const request={
      id:id,
      content:newTodo
    }
    onUpdateTodo(request)
    setEditTable(false)
  }

  return (
    <div className='todo-content'>
      <div>
        {
          editTable ?  <input className='todo-input'  value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}  type="text"  /> : content
          
        }
      </div >
      <div style={{marginLeft:'12px'}}>
        <img src={trash} className='todo-icon' data-icon="left" alt="delete" onClick={removeTodo} />
        {
          editTable ? <img src={check} className='todo-icon'  alt="check" onClick={updateTodo} /> 
          : <img src={edit} className='todo-icon' data-icon="right" alt="edit" onClick={()=>setEditTable(true)} />
        }
      </div>
    </div>
  )
}

export default Todo
