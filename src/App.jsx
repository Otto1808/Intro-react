import { useState } from 'react';
import './App.css';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import {Routes, Route} from 'react-router-dom'
import { CalendarComp } from './CalendarComp';
import { List } from './List'
import { SwapHeader } from './SwapHeader';
import {v4 as uuidv4} from 'uuid';

uuidv4();

export const LSKEY = "MyTodoApp";

function App() {
  const [items, setItems] = useState(()=>{
    const localItems = JSON.parse(localStorage.getItem(LSKEY + ".items"));
    if(localItems == null) return []
     return localItems;
  });
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  console.log(items);
  
  function addItem(){
    const inputTodo = document.getElementById('inputTodoList');
    setItems([...items, {
      key: uuidv4(),
      name : inputTodo.value,
      completed : false
    }]);
    addEvent();
  }

  const addEvent = () => {
    const inputTodo = document.getElementById('inputTodoList');
    let start = document.getElementById('start');
    let end = document.getElementById('end');

    /* console.log('start');
    console.log('end'); */

    let event = {
      start: new Date(start.value),
      end: new Date(end.value),
      title: inputTodo.value
    }

    setEvents([...events,event]);
  }

  

  return (
    <>
      <SwapHeader/>
      <Routes>
        <Route 
          path='/'
          element={<List 
            addEvent={addEvent}
            items={items}
            addItem={addItem}
            setItems={setItems}
        />}
        />

        <Route 
          path='Calendar'
          element={<CalendarComp
            localizer={localizer}
            events={events}
          />}
        />
      </Routes>
    </>
  );
   
}

export default App
