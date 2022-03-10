import React from 'react';
import './Book.css';
import Image from "../image/Image";

const Book = ({title,year,author,quote,src}) => {

    return  <div className='book'>
                <div className='data'>
                    <p>Title: {title}</p>
                    <p>Year: {year}</p>
                    <p>Author: {author}</p>
                    <p>Quote: {quote}</p>
                </div>
                <Image src={src}/>

            </div>
}

export default Book;