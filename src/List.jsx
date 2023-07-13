import {useEffect} from 'react';
import { Title } from './Title';
import { InputBtn } from './InputBtn';
import { LSKEY } from './App';


// eslint-disable-next-line react/prop-types
export const List = ({items, addItem}) => {
    
    const handleClear = () =>{
        localStorage.removeItem(LSKEY + ".items");
        window.location.reload();
      }

    useEffect(() => {
        console.log(items);
        console.log(localStorage.setItem(LSKEY + ".items", JSON.stringify(items)));
    }, [items]);
    return(
        <div className="app">
            <Title text={"Todo list"}></Title>

            <InputBtn type="text"/*  name="" id="" */
                placeholder='Add a task'
                onClick={() => addItem()}
                text = "ADD">
            </InputBtn>

            <button onClick={handleClear}>Clear</button>
                <ul>
                    {items.map((item, i) => {
                    return(
                    <li key={i}><input type="checkbox"/>{item.name}</li>
                    )
                    })}
            </ul>
      </div>
    )
}