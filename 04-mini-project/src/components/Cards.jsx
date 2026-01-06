import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
  return (
    <div className='card'>
      <div className="top">
        <img src={props.logo} alt="" />
        <button className="save">Save <Bookmark size={15}/></button>
      </div>
      <div className="center">
      <h2>{props.company} <span>{props.post}</span></h2>
        <h1>{props.desig}</h1>
        <div className='tags'>
          <h3>{props.tag1}</h3>
          <h3>{props.tag2}</h3>
        </div>
      </div>
      <div className="bottom">
        <div className="salary">
          <h1>{props.salary}</h1>  
          <h6>{props.loc}</h6>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Cards
