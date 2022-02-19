import React, { Component } from 'react';
import "../App.css";
import Count from "./Count";
import "./Day.css";
import FilterTask from "./FilterTask";
import Ul_taskDay from "./Ul_taskDay";

const Day = (props) =>{
   
    return ( <div className="editTask">
        <input type="text" required value={}
              name={name} value={name} onChange={handleNewTaskValue}/>
               <button type="submit">Save</button>
    </div>
        );
}
export default Day;
