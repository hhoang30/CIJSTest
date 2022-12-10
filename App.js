
import { useState, useEffect } from 'react'
import './App.css';
import NavBar from './components/navbar';
import Active from './components/active';
import Finished from './components/finished';
import CreateTodo from './components/create_todo';
function App() {
  const [openAddToDo, setopenAddToDo] = useState(true);
  const [openActive, setopenActive] = useState(false);
  const [openFinshied, setfinshied] = useState(false);
  const[listTodo,setListTodo] = useState([])
  
  return (
    <div className='container'>
      <h1>#todo</h1>
       <div className='main'>
          
            <NavBar  setopenAddToDo={setopenAddToDo} setopenActive={setopenActive} setfinshied={setfinshied}/>
            <div className='todo'>
              {openAddToDo === true 
                ? <CreateTodo listTodo={listTodo} setListTodo={setListTodo}/> :null
              }
              {openActive === true 
                ? <Active listTodo={listTodo} setListTodo={setListTodo}/> : null
              }
              {openFinshied === true 
                ? <Finished listTodo={listTodo} setListTodo={setListTodo}/> :null
              }
            </div>
       </div>

    </div>
  );
}

export default App;
