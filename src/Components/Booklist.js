import React from "react";
import './Booklist.css'

const Booklist = () => {
    return (
        <section className='bList'>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        
        </section>
    )
}

const Book = () => {
    return (
    <article className='book'>
        BOOK! :)

        <Title />
        <Author />


    </article>
     
    )}

const Title = () => {
    return <h4>love you to the moon and back</h4>

}

const Author = () => {
    return <p style={{color:'red', fontSize:'10pt'}}>Amelia</p>
    // this is called in line css. this will override css file. inner {}brackets are objects. outer ones are JS

}



export default Booklist;