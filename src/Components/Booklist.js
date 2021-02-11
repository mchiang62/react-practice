import React from "react";
import './Booklist.css'


const books = [{
    id: 1,
    title: "The Subtle Art of Not Giving a F**k",
    author: "Mark Manson",
    imgBook: 'https://books.google.com/books/publisher/content/images/frontcover/yng_CwAAQBAJ?fife=w200-h300'
},
{
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    imgBook: 'https://m.media-amazon.com/images/I/51j5p18mJNL._SY346_.jpg'
},

{
    id: 3,
    title: "The Book of Two Ways: A Novel",
    author: "Jodi Picoult",
    imgBook: 'https://m.media-amazon.com/images/I/51EF8oBnYcL._SY346_.jpg'
}


]



const Booklist = () => {
    return (
        <section className='bList'>
            {/* <Book imgBook={firstBook.imgBook} title={firstBook.title} author={firstBook.author}/> */}

            {books.map((book)=> {
                const {id, title, author, imgBook} = book;
                return (
                <Book 
                    key={id}
                    img={imgBook}
                    title={title}
                    author={author}
                    />

                )

            })}
           
        </section>
    )
}



const Book = (props) => {
    //object destructuring - not just for react - it's JS ({img, title, author})
    // const {img, title, author} = props.book

    const clickHandler = () => {
        alert('hiiiiii Mel')
    }
    
    return (

    <article className='book'>
        <img src={props.img} />
        <h4 style={{fontWeight:'bold'}}>{props.title}</h4>
        {props.children}
        <p style={{color:'red', fontSize:'12pt'}}>{props.author}</p>
        <button type="button" onClick={clickHandler}>HI</button>
        {/* <button type="button" onClick={() => clickHandler(info)}>HI</button> 
        if you need to pass the arguments then you gotta create another function in line
        */}
        
        


    </article>
     
    )}





export default Booklist;


{/* <p style={{color:'red', fontSize:'12pt'}}>Mark Manson</p> */}
{/* this is called in line css. this will override css file. inner {}brackets are objects. outer ones are JS */}