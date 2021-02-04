import React from 'react';
import ReactDom from 'react-dom';


//capital letter means component
const Greeting = () => {

   return (
       
        <div>
            <MyName />
            <h2> Hi Melissa </h2>
            <ul>
                <li>How old are you?</li>
                <li>what's your progress on your job search</li>
            </ul>
        </div>
        
    )




//if you don't add the parentheses after return, then first element has to be on the same line as return keyword
//wrap in single element <div></div>
//still rendering html, semantic
//use camelCase for HTML attribute
//<div className>




    // return (
    //     <h2>component by importing ReactDom</h2>
    // )



    // return React.createElement('h2', {}, 'hello melissa')

}


const MyName = () => <h1>My Name</h1>
    //implicit return
    //nested components
    




// ReactDom.render(<Greeting />, document.getElementById('root'))
//putting this (JS) into the index.html file

export default Greeting;
// render() looks for two things