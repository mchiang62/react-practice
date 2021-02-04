import React from "react";
import './Booklist.css'


const title = "The Subtle Art of Not Giving a F**k"
//this is not hard coding anymore
const author = "Mark Manson"
const imgBook = 'https://books.google.com/books/publisher/content/images/frontcover/yng_CwAAQBAJ?fife=w200-h300'

const firstBook = {
    title: "The Subtle Art of Not Giving a F**k",
    author: "Mark Manson",
    imgBook: 'https://books.google.com/books/publisher/content/images/frontcover/yng_CwAAQBAJ?fife=w200-h300'
}



const Booklist = () => {
    return (
        <section className='bList'>
            <Book imgBook={imgBook}/>
            <Book title={firstBook.title}/>
            <Book author={author}/>
        
        </section>
    )
}



const Book = (props) => {
    

    return (

    <article className='book'>
        <img src={props.imgBook} />
        <h4 style={{fontWeight:'bold'}}>{props.title}</h4>
        <p style={{color:'red', fontSize:'12pt'}}>{props.author}</p>



    </article>
     
    )}





export default Booklist;


{/* <p style={{color:'red', fontSize:'12pt'}}>Mark Manson</p> */}
{/* this is called in line css. this will override css file. inner {}brackets are objects. outer ones are JS */}