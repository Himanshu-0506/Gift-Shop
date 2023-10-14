import React from 'react'

 const GiftItems = ({
  title,
  link,
  price,
  old_price,
  second_hand_condition,
  rating,
  thumbnail,
  store_rating,
  snippet,
  id
}) => {
  
  return (
    <>
     
    <div className='Container'>
       <div className="card my-5 mx-5" 
       style={{
               width: '18rem', 
               lineHeight: '12px', 
               borderRadius:'10px', 
               boxShadow:'0px 0px 10px grey',
              }} 
               key={id}>

        <div style={{display:'flex', justifyContent: 'space-between', padding:"15px"}}> 
           <h5 className="card-title ">{title}</h5>
            <h5 className="card-title">Price: {price}</h5>
        </div>
        <div style={{padding: '15px'}}>
          <img src={thumbnail} className="card-img-top" alt=""/>
          </div>
      <div className="row">
      <div className="card-body mx-2">
        <p className="card-text">Old Price: {old_price}</p>
        <p className="card-text">Condition: {second_hand_condition}</p>
        <p className="card-text">Rating: {rating}</p>
        <p className="card-text">StoreRating: {store_rating}</p>
        <p className="card-text">Snippet: {snippet}</p>
        <a href={link} target="_blank" className="btn btn-primary">Buy Now</a>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default GiftItems