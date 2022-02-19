import React, { useState }  from "react";
import { nanoid } from "nanoid";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CloseIcon from '@mui/icons-material/Close';
import "../App.css";
import "./SectionAddTask.css";
import { task } from "../data/taskData";

const SectionAddTask = (props) => {
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

  const [taskArr, setTaskArr] = useState([
    {"id": "01","day": "Sunday", "time": "", "task": "","data": "", "active": false },
    {"id": "02","day": "Monday", "time": "", "task": "", "data": "", "active": false},
    {"id": "03","day": "Tuesday", "time": "", "task": "","data": "", "active": false},
    {"id": "04","day": "Wednesday", "time": "","task": "", "data": "","active": false},
    {"id": "05","day": "Thursday", "time": "", "task": "", "data": "","active": false},
    {"id": "06","day": "Friday", "time": "","task": "", "data": "", "active": false},
    {"id": "07","day": "Saturday", "time": "","task": "", "data": "", "active": false}
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
      const checkTask = weeklyTasks.filter(t => t.task === name);
      checkTask.length === 0 ? 
      localStorage.setItem("weeklyTasks", JSON.stringify([ ...weeklyTasks,...newTasks])) 
      : alert("You already have this Task!") ;
    }
} 
  function handleClose(){
  const none="none"; 
  props.displaySectionAdd(none);
}
  function handleSubmit(e) {
    e.preventDefault();
    const newTasks = taskArr.filter((day)=> day.active ===true);
    setName('');
    setTime('');
    saveLocalTasks(newTasks);
    handleClose();
  }
  function handleNewTaskValue(e) {
    let n = e.target.value;
    setName(e.target.value);
    const updateArr = taskArr.map((day) => day.task !== n ? {...day, task: n, id: "todo-" + nanoid()} : day );
    setTaskArr(updateArr);
  }
  function handleChangeTime(e) {
    setTime(e.target.value);
    let t = e.target.value;
    const updateArr = taskArr.map((day) => day.time !== t ? {...day, time: t} : day );
    setTaskArr(updateArr);
  }
  function handleChange(e) {
    let v= e.target.value;
    let d= new Date().toLocaleDateString();
    const updateArr = taskArr.map((day) => day.day === v ? {...day, active: !day.active, time: time, task: name, data: d, id: "todo-" + nanoid()} : day )
    setTaskArr(updateArr);
    // npm install nanoid  id: "todo-" + nanoid()
  }

  return (
    <section style={{ display: `${props.displaySection}` }}>
      <CloseIcon className="icons" sx={{ fontSize: 50 }} onClick={handleClose}/>
      <form onSubmit={handleSubmit}>
        <input type="text" className="newTaskinput" required placeholder="What needs to be done?" 
        name={name} value={name} onChange={handleNewTaskValue}/>
        <button type="submit">
          <AddTaskIcon className="addTaskIcon" sx={{ fontSize: 80 }} onClick={props.addTaskToData}/>
        </button>
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
      </form>
    </section>
  );
};
export default SectionAddTask;

