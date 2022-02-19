import React from "react";
import "../App.css";
import "./Day.css";


const FilterTask = () =>{

  // let weeklyTasks;
  // localStorage.getItem("weeklyTasks") == null ? (weeklyTasks = taskData) : (weeklyTasks = JSON.parse(localStorage.getItem("weeklyTasks")));

  // let totalTaskPerDay = weeklyTasks.filter(el => el.day === props.slideDay);
  // let doneTasksPerDay = weeklyTasks.filter(el => el.active === false && el.day === props.slideDay )
  // let activeTasksPerDay = weeklyTasks.filter(el => el.active === true && el.day === props.slideDay);


    return (
            <div className="filterTask">
            <span>All</span>
            <span>Done</span>
            <span>Active</span>
          </div>
);
};
export default FilterTask;

