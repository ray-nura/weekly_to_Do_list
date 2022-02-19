import React, { useState }  from "react";
import "../App.css";
import { nanoid } from "nanoid";
import "../App.css";
import "./SectionAddTask.css";
import CloseIcon from '@mui/icons-material/Close';


const SectionAddTask = (props) =>{
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
  const [taskArr, setTaskArr] = useState([
    {"id": "01", "day": "Sunday", "time": "", "task": "","data": "", "active": false },
    {"id": "02","day": "Monday", "time": "", "task": "", "data": "", "active": false},
    {"id": "03","day": "Tuesday","time": "", "task": "","data": "", "active": false},
    {"id": "04", "day": "Wednesday","time": "","task": "task", "data": "","active": false},
    {"id": "05","day": "Thursday","time": "", "task": "some task Thursday", "data": "","active": false},
    {"id": "06","day": "Friday","time": "","task": "some task Friday", "data": "", "active": false},
    {"id": "07","day": "Saturday","time": "","task": "some task Saturday", "data": "", "active": false}
  ]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const saveLocalTasks = (newTasks) => {
    let  weeklyTasks; 
    if (localStorage.getItem("weeklyTasks") === null) {
      weeklyTasks = [];
      localStorage.setItem("weeklyTasks", JSON.stringify([ ...weeklyTasks,...newTasks]));
    } else {
      weeklyTasks = JSON.parse(localStorage.getItem("weeklyTasks"))
      localStorage.setItem("weeklyTasks", JSON.stringify([ ...weeklyTasks,...newTasks]));
    }
} 
  function handleClose(){
  const none="none"; 
  props.displaySelect(none);
}
  function handleSubmit(e) {
    e.preventDefault();
    const newTasks = taskArr.filter((day)=> day.active ===true)
    // props.addTasks(newTasks);
    setName('');
    setTime('');
    saveLocalTasks(newTasks);
    handleClose()
  }
  function handleNewTaskValue(e) {
    setName(e.target.value);
    let n = e.target.value;
    const updateArr = taskArr.map((day) => day.task !== n ? {...day, task: name} : day )
    setTaskArr(updateArr);
  }
  function handleChangeTime(e) {
    setTime(e.target.value);
    let t = e.target.value;
    const updateArr = taskArr.map((day) => day.time !== t ? {...day, time: time} : day )
    setTaskArr(updateArr);
  }
  function handleChange(e) {
    let v= e.target.value;
    let d= new Date();
    const updateArr = taskArr.map((day) => day.day === v ? {...day, active: !day.active, time: time, task: name, data: d, id: "todo-" + nanoid()} : day )
    setTaskArr(updateArr);
    // npm install nanoid  id: "todo-" + nanoid()
  }
  
    return (
        <section style={{ display:`${props.displayForm}`}}>
          <CloseIcon className="icons" fontSize="large" onClick={handleClose}/>
          <form onSubmit={handleSubmit}>
            <input type="text" className="newTaskinput" required placeholder="What needs to be done?"
              name={name} value={name} onChange={handleNewTaskValue}/>
            
            <div className="weekDay">
              
            {daysOfWeek.map((dayOfWeek, index) => {
            return (
              <>
                <label className="days-checkbox" htmlFor={dayOfWeek}> {dayOfWeek.slice(0, 3)}</label>
                <input onChange={handleChange} type="checkbox" id={index} name={dayOfWeek} value={dayOfWeek}/>
              </>
            );
          })}
            </div>
            <input type="time" id="time" required name={time} value={time} onChange={handleChangeTime}/>
            <div className="taskBtn">
              <button type="submit">Add New Task</button>
            </div>
          </form>
        </section>

);
};
export default SectionAddTask;