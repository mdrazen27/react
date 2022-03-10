import React from 'react';
import './Movies.css';
import Image from "../image/Image";
const Movie = ({title,year,genre,director,actors,src}) => {
    let actorNames = ''

    actors.forEach((i)=>actorNames+=i+' ')
    return  <div className='movie'>
                <div className='data'>
                    <p>Title: {title}</p>
                    <p>Year: {year}</p>
                    <p>Genre: {genre}</p>
                    <p>Movie director: {director}</p>
                    <p>Actors: {actorNames}</p>
                </div>
                <Image src={src}/>

            </div>
}

export default Movie;