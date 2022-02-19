import React, { Component } from 'react';
import "../App.css";
import Count from "./Count";
import "./Day.css";
import FilterTask from "./FilterTask";
import Ul_taskDay from "./Ul_taskDay";

const Day = (props) =>{
   
    return ( <div className="container">
        { props.theme.map((el) => { return (
            <div className={props.slideDay === el.name ? 'slide active' : 'slide'}
             id={el.id} onClick={() => props.addActive(el.name)}
            style={{ backgroundImage: `url(${el.imgURL})`}}
            >
            <h3 >{el.name}</h3>
            <div className="slideTaskDay">
            <FilterTask />
            <Ul_taskDay slideDay={el.name} />
            </div>
            <Count slideDay={el.name}/>
            </div>
        )
        })
    }
    </div>
        );
}
export default Day;
