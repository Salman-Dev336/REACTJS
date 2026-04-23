import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
     <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <h2>Age: {props.age}</h2>
        <p>
          {props.user} is an Indian film actor, producer, and television
          personality. He is one of the most popular and influential actors in
          the Indian film industry, known for his charismatic screen presence
          and philanthropic work.
        </p>
        <button>View Profile</button>
      </div>   
  )
}

export default Card