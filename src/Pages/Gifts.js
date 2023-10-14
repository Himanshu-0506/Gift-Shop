import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from '../DataContext';
import GiftItems from '../Component/GiftsItems';

// ...rest of your code

function Gifts() {

  const {responseData} = useDataContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; 
      localStorage.setItem("refreshing", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const isRefreshing = localStorage.getItem("refreshing") === "true";

    if (isRefreshing) {
      // Perform the action you want to trigger after refresh.
      navigate("/");

      // Clear the localStorage flag.
      localStorage.removeItem("refreshing");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, );


  return (
    <div className='container'>
    <h2 className="text-center my-3" style={{textDecoration:'none', color:'black'}}>Gift Recommendation</h2>
    
        <div className="row">
      {responseData.map((element, id) => (
        <div className="col-md-3">
          
       <GiftItems key={id}
              title={element.title || ""}
              price={element.price || ""}
              link={element.link || ""}
              snippet={element.snippet || ""}
              thumbnail={element.thumbnail || ""}
              old_price={element.old_price || ""}
              second_hand_condition={element.second_hand_condition || ""}
              rating={element.rating || ""}
              store_rating={element.store_rating || ""}
              />
       </div>
       ))}
       </div>
    </div>
  )
}

export default Gifts
