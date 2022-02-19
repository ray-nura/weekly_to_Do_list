import React, { Component, useState } from 'react';
import "../App.css";
import "./Day.css";
import Count from "./Count";
import FilterTask from "./FilterTask";
import Ul_taskDay from "./Ul_taskDay";

const Day = (props) =>{
    const [filterVal, setFilterVal] = useState('');
    const filterValu = x => setFilterVal(x);

    return ( <div className="container">
         {props.theme.map((el) => {
        return (
          <div
            className={props.slideId === el.id ? "slide active" : "slide"}
            id={el.id}
            onClick={() => props.addActive(el.id)}
            style={{ backgroundImage: `url(${el.imgURL})` }}
          >
            <h3>{el.name}</h3>
            <div className="slideTaskDay">
              <FilterTask dayName={el.name} filterValue={filterValu}/>
              <Ul_taskDay dayName={el.name} filterBtn={filterVal}/>
            </div>
            <Count dayName={el.name} />
          </div>
        );
      })}
    </div>
    );
};
export default Day;
