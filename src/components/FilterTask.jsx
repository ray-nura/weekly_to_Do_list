import React, {useState} from "react";
import "../App.css";
import "./Day.css";

const FilterTask = (props) => {
  const [text, setText] = useState('All')
const sendBtnValue = (e)=> {
  let x = e.target.innerText;
  setText(x);
  props.filterValue(x);
}
  return (
    <div className="filterTask">
      <span className={text === "All" ? "filter" : ""} onClick={sendBtnValue}>All</span>
      <span className={text === "Done" ? "filter" : ""} onClick={sendBtnValue}>Done</span>
      <span className={text === "Active" ? "filter" : ""} onClick={sendBtnValue}>Active</span>
    </div>
  );
};
export default FilterTask;

