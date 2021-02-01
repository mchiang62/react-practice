import './App.css';
import Practice from './Components/Practice'
import Employee from './Components/Employee'
import Documentation from './Components/Documentation'


function App() {

  const employeeInfo = [
    {
      firstName: "Melissa",
      lastName: "Chiang",
      age: "12",
      id: "1"
    },
    {
      firstName: "Kay",
      lastName: "A",
      age: "10",
      id: "2"
    },
    {
      firstName: "Andrew",
      lastName: "B",
      id: "3"
    },
    {
      firstName: "Anthony",
      lastName: "C",
      age: "18",
      id: "4"
    },
    {
      firstName: "Amy",
      lastName: "D",
      age: "20",
      id: "5"
    },

  ];

  return (
    <div className="App">
      {/* <Practice /> */}


      {/* {employeeInfo.map((employee) => (
        <Employee 
        
        firstName = {employee.firstName}
        lastName = {employee.lastName}
        age = {employee.age}
         
         />
    ))} */}


    {/* {employeeInfo.map((employee) => {
      const {firstName, lastName, age } = employee;
      return (
        <Employee firstName={firstName} lastName={lastName} age={age}/>
      )
    })} */}



    {/* {employeeInfo.map((employee) => {
      return (
        <Employee key={employee.id} {...employee}/>
      )
    })} */}

    <Employee />


      {/* <Employee firstName="Melissa" lastName="Chiang" age="12"/>
      <Employee firstName="Kay" lastName="a" age="10"/>
      <Employee firstName="Andrew" lastName="b" age="11"/>
      <Employee firstName="Anthony" lastName="c" age="18"/>
      <Employee firstName="Amy" lastName="d" age="20"/> */}

       
    </div>
  );
}

export default App;
