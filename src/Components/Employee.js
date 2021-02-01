import React from "react";

const Employee = (props) => {
    //props is object that has values in it 
    //this props object has every item nested inside of it


    // destructuring  - taking everything from this object 
    const { firstName, lastName, age: employeeAge } = props;
    //change the name of the variable age, you add age:employeeAge 
    //could just move everything to the parameter of Employee


    return (
        <div>
            <h1>Employee name: {props.firstName} {props.lastName} </h1>

            {/* using string interpolation below */}

            <p>{`Employee name: ${props.firstName} can add string ${props.lastName}`} </p>

            <span>destructuring: {firstName} {lastName} # {employeeAge} </span>
        </div>
    );
}

export default Employee;