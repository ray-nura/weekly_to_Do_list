import React from "react";
import "../App.css";
import "./Day.css";
import taskData from "../data/taskData";


const Count = (props) =>{
  let weeklyTasks;
  localStorage.getItem("weeklyTasks") == null ? (weeklyTasks = taskData) : (weeklyTasks = JSON.parse(localStorage.getItem("weeklyTasks")));

  let totalTaskPerDay = weeklyTasks.filter(el => el.day === props.dayName);
  let doneTasksPerDay = weeklyTasks.filter(el => el.active === false && el.day === props.dayName )
  let activeTasksPerDay = weeklyTasks.filter(el => el.active === true && el.day === props.dayName);

    return (
        <div className="count">
          <span>{totalTaskPerDay.length} Tasks</span> <span>{doneTasksPerDay.length} done</span> <span>{activeTasksPerDay.length} active</span>
        </div>
);
};
export default Count;
