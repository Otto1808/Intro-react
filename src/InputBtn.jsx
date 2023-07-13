export const InputBtn = (props) => { 
  
    return ( 
    <div>
        <div className="containerInputBtn">
            <input type="text" placeholder="" id="inputTodoList"/>
            {/* eslint-disable-next-line react/prop-types, react/prop-types */}
            <button onClick={props.onClick}>{ props.text }</button>
        </div>
        <input type="date" id="start"/>
        <input type="date" id="end"/>
    </div>  
    );   
  }