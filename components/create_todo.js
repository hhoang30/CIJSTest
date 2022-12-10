
import { useState, useEffect } from 'react'



function CreateTodo({listTodo,setListTodo}) {
  const onChangeFinishied =(e)=>{
    console.log(e.target.value)
    let id_task = e.target.value
    let child = e.target.nextSibling
    console.log(child)
    listTodo.forEach(item=>{
      if(item.id === id_task){
        child.style.textDecoration="line-through"
        item.type ='completed'
        // let task = document.getElementById(item.id)
        //  task.classList.add('cross')
        
      }
    })
    
  }
  const addToDo=()=>{
    let input_value = document.getElementById("add_todo").value
    let todo ={
      text : input_value,
      id:Math.random().toString(16).slice(2),
      type:'all'
    }
    setListTodo([...listTodo,todo ])
    console.log(listTodo)
    listTodo.forEach(element => {
      console.log(element)
    });
  }
  useEffect(() => {

    
    }, [listTodo]); 
  return (
    <div className='add_container'>
       <div className='input_text'>
          <input id='add_todo' className='webflow-style-input' type="text"/>
          <button className='add btn' onClick={addToDo}>Add</button>  
       </div>


       <div className='todo_list'>
         
         {
           listTodo.map((item,id)=>{
            
            return <div className='task'>
                <button  value={item.id} key={item.id} onClick={onChangeFinishied}>Finished</button>
                <p id={item.id}  >{item.text}</p>
              </div>
             
             
           })

         }
      
       </div>
    </div>
  );
}

export default CreateTodo;
