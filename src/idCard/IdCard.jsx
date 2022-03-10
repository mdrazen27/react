import React from 'react';
import './IdCard.css';
import Image from "../image/Image";

const IdCard = ({name,surname,date,city,src}) => {

    return  <div className='idCard'>
                <div className='data'>
                    <p>Name and surname: {name} {surname}</p>
                    <p>Date of birth: {date}</p>
                    <p>City: {city}</p>
                </div>
                <Image src={src}/>

            </div>
}

export default IdCard;