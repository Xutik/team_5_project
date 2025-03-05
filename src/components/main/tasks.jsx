import React from "react";
import './tasks.css'

function Tasks () {
    return(
        <div className="tasks">
            <h3 className="taskTitle">Today's Tasks</h3>
            <ul>
                <li> <input type="checkbox" name="" id="" /> Patient rounds and assessments</li>
                <li> <input type="checkbox" name="" id="" /> Charting and updating patient records</li>
                <li> <input type="checkbox" name="" id="" /> Patient rounds and assessments</li>
                <li> <input type="checkbox" name="" id="" /> Charting and updating patient records</li>
                <li> <input type="checkbox" name="" id="" /> Patient rounds and assessments</li>
                <li> <input type="checkbox" name="" id="" /> Charting and updating patient records</li>
                <li> <input type="checkbox" name="" id="" /> Patient rounds and assessments</li>
                <li> <input type="checkbox" name="" id="" /> Charting and updating patient records</li>
                <li> <input type="checkbox" name="" id="" /> Patient rounds and assessments</li>
                <li> <input type="checkbox" name="" id="" /> Charting and updating patient records</li>
            </ul>
        </div>
    )
}

export default Tasks