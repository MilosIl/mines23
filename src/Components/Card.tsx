import React from 'react'

interface ICard {
    title:string;
    body:string;
}

const Card = ({title, body}: ICard) => {
  return (
    <div className='card'>
        <p className='card-title'>{title}</p>
        <p className='card-body'>{body}</p>
    </div>
  )
}

export default Card