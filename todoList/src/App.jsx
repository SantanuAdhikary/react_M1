
import React, { useState } from 'react'

const App = () => {

  let [todo, setTodo] = useState("")

  let [todoList , setTodoList] = useState([])

  let addTodo =()=>{

    if(todoList.includes(todo)) return;

    if(todo.trim() ==="") return

    setTodoList([...todoList,todo])



    setTodo("")
  }
    

  let deleteTodo =(index)=>{

     let updatedTodo =  todoList.filter((e,i)=>{
          return i!== index
       })

    setTodoList(updatedTodo) 
  }
  return (
    <div className='outer'>


      <h1> todo list</h1>

      <div className="search">
        <input type="text" placeholder='enter todo' value={todo} onChange={(e)=> setTodo(e.target.value)}/>

        <button onClick={addTodo} >add</button>
      </div>

      <div className="box">

        {
          todoList.map((ele,index)=>{
            return(
              <div className='list'> {ele} 

               <button onClick={()=>deleteTodo(index)}>delete</button> 
               
              </div>
            )
          })
        }

      </div>


    </div>
  )
}

export default App