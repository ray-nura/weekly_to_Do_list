import React, { Component, useState } from "react";
import EditTask from "./EditTask";
import "../App.css";
import "./Day.css";
import taskData from "../data/taskData";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";

const Ul_taskDay = (props) => {

  let weeklyTasks;
  if (localStorage.getItem("weeklyTasks") == null) weeklyTasks = taskData;
   else weeklyTasks = JSON.parse(localStorage.getItem("weeklyTasks"));
  const filteredActiveDay = weeklyTasks.filter(taskDay => taskDay.day === props.dayName);
  let filteredActiveDay1=filteredActiveDay;
  //  -----------filter Task function ---------!!!!!!!!!!! 
  let filterValBtn = 'All'; 
  filterValBtn = props.filterBtn; 
  if(filterValBtn==='All')
    filteredActiveDay1 = weeklyTasks.filter(taskDay => taskDay.day === props.dayName);
  if(filterValBtn==='Done')
    filteredActiveDay1 = filteredActiveDay.filter(taskDay => taskDay.active === false);
  if(filterValBtn==='Active') 
    filteredActiveDay1 = filteredActiveDay.filter(taskDay => taskDay.active === true);
  // filteredActiveDay.sort((a,b)=>a.time-b.time);

  const deleteBtn = (e) => {
    let ids = e.target.id
    const indexSearch = weeklyTasks.findIndex(v => v.id === ids);
    weeklyTasks.splice(indexSearch, 1);
    localStorage.setItem("weeklyTasks", JSON.stringify([...weeklyTasks]));
  }
  const checkMark = (e) => {
    let ids = e.target.id;
    const doneMark = weeklyTasks.map(p => p.id === ids ? { ...p, active: !p.active } : p);
    localStorage.setItem("weeklyTasks", JSON.stringify([...doneMark]));
  }
  const [edit, setEdit] = useState("");
  const [idObj, setId] = useState("");
  const [valTask, setVal] = useState("");

const editTask = (e) => {
  let ids = e.target.id;
  let valObj = e.target.className;
  const block = "block";
  setEdit(block);
  setId(ids);
  setVal(valObj);
}
const saveEdit =(ids, val) => {
  weeklyTasks = JSON.parse(localStorage.getItem("weeklyTasks"));
  const checkTask = weeklyTasks.filter(t => t.task === val);
  if (checkTask.length === 0) {
    const editedtask = weeklyTasks.map(p => p.id === ids ? { ...p, task: val } : p);
    localStorage.setItem("weeklyTasks", JSON.stringify([...editedtask]));
    const none = "none";
    setEdit(none);
  } else {
    alert("You already have this Task!") ;
  }
}
  return (
    <ul className="taskDay">
      {filteredActiveDay1.map((item) => {
        return (
          <>
            <li className={item.active ? "unchecked" : "checked"}>
              <div className="time-and-tasks" key={item.id}>
                <span>{item.time}</span>
                <span className="taskValue">{item.task}</span>
              </div>
              <div id={item.id} className={item.task} onClick={editTask} >
                <EditIcon className="icons" fontSize="large" />
              </div>
              <div className="check mui-icon" id={item.id} onClick={checkMark}>
                <CheckCircleIcon className="icons" fontSize="large"/>
              </div>
              <div className="delete mui-icon" id={item.id} onClick={deleteBtn} >
                <DeleteIcon className="icons" fontSize="large"/>
              </div>
            </li>
            <hr/>
            <p>created: {item.data}</p>
          </>
        );
      })}
      <EditTask displayEditTask={edit} idObj={idObj} valObj={valTask} saveEdit={saveEdit}/>
    </ul>
  );
};
export default Ul_taskDay;

