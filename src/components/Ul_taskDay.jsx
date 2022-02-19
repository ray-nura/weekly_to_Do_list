import React from "react";
import "../App.css";
import taskData from "../data/taskData";
import "./Day.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";

const Ul_taskDay = (props) =>{

  let weeklyTasks;
  if (localStorage.getItem("weeklyTasks") == null) {
    weeklyTasks = taskData;
  } else {
    weeklyTasks = JSON.parse(localStorage.getItem("weeklyTasks"))
  }
  const filterDay = weeklyTasks.filter(el => el.day === props.slideDay )


    // edit or change to done 
  const  handleActive = (e) => {
    let currID = e.target.id;
    const newTasks = weeklyTasks.map(day => day.id === currID ? { ...day, active: !day.active} : day);
    localStorage.setItem("weeklyTasks", JSON.stringify([...newTasks]));
  }
  const  handleDelete = (e) => {
    let currID = e.target.id;
    const indx = weeklyTasks.findIndex(task => task.id === currID);
    weeklyTasks.splice(indx, indx > 1 ? 1 : 0);
    localStorage.setItem("weeklyTasks", JSON.stringify([...weeklyTasks]));
  }
  const handleEdit = (e) => {
    let currID = e.target.task;
    const block="block"; 
    props.displaySelect(block);
  }
    return (
        
          <ul className="taskDay">
            { filterDay.map((el) => { return (
            <>
            <li className={el.active ? "active" : "done"}>
              <span>{el.time}</span>
              <span className="taskValue" key={el.id} >{el.task}</span>
              <button> <EditIcon id={el.id} className="icons" fontSize="large" id={el.id}  onClick={handleEdit}/></button>
              <button id={el.id}  onClick={handleActive}> <CheckCircleIcon  active={el.active} className="icons" fontSize="large"/></button>
              <button id={el.id}  onClick={handleDelete}> <DeleteIcon   className="icons" fontSize="large" /></button>
            </li>
              <p>created: {el.data}</p>
            </>
            )
            }) }
          </ul>
       

);
};
export default Ul_taskDay;

