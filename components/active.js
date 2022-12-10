
import { useState, useEffect } from 'react'



function Active({listTodo,setListTodo}) {
 
 
  return (
    <div className='add_container'>
      
       <div className='todo_list'>
         
         {
           listTodo.filter(item => item.type!=='completed').map(itemFilter=>{
            
            return <div className='task'>
                
                <p id={itemFilter.id}  >{itemFilter.text}</p>
              </div>
             
             
           })

         }
      
       </div>
    </div>
  );
}

export default Active;
