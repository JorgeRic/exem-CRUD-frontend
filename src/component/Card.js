import React from 'react'

function Card(props) {
  // console.log(props)
  const { app } = props;
  return (
    <div>
      <article className="card mb-5 w-80 h-50">
            <div className="card-header w-80">
              <h3>{app.name}</h3>
            </div>
            <div className="card-body">         
              <img src={app.image} className="w-70 h-40" alt={app.name}/>
              <p className="m-3">Price: {app.price} $</p>
              <p>Date: {app.description}</p>
              <p>Category: {app.category}</p>
            </div>
          </article>
    </div>
  )
}

export default Card
