import React , { useState } from "react";
import "../App.css";
import "./Day.css";

export default function EditTask(props) {
  const [name, setName] = useState("");
  const changeValue = (e) => { 
      setName(e.target.value)
}
const saveTask = (e)=>{
    let ids = e.target.id
    name === '' ? alert('Your Task is Empty!') : props.saveEdit(ids, name);
setName('')
}

  return (
    <div className="editTask" style={{ display: `${props.displayEditTask}` }}  >
        <input type="text" id={props.idObj} placeholder={props.valObj} required
        value={name} onChange={changeValue}/>
       <button className="editTaskBtn" type="submit" id={props.idObj} onClick={saveTask}>Save</button>

    </div>
  )
}
