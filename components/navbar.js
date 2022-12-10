import { useState } from "react";

function NavBar({setopenAddToDo,setopenActive,setfinshied}) {
  
  
  const onClickAdd = ()=>{
    console.log("Hello")
    setopenAddToDo(true)
    setopenActive(false)
    setfinshied(false)
  }
  const onClickActive = ()=>{
    setopenAddToDo(false)
    setopenActive(true)
    setfinshied(false)
  }
  const onClickFinished = ()=>{
    setopenAddToDo(false)
    setopenActive(false)
    setfinshied(true)
  }
  return (
    <header className='navbar'>
        
    <div className='navbar__item' onClick={onClickAdd}>Add to do</div>
    <div className='navbar__item' onClick={onClickActive}>Active</div>
    <div className='navbar__item' onClick={onClickFinished}>Finished</div>        
    </header>
  );
}

export default NavBar;