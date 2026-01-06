import React from 'react'

const Card = (props) => {
  return (
    <div className='cont'>
      <div className="cards">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, laborum?</p>
      </div>
    </div>
  )
}

export default Card
