import React, { useState } from "react";

const ItemCard = ({ item }) => {
   let [interested, setInterest] = useState(false);

   const handleInterested = () => {
      setInterest(!interested);
      if (interested)
         item.interested++;
   }
   const style = interested ? "btn btn-outline-success" : "btn btn-outline-secondary";

   return (
      <div className="card m-2">
         <img src="..." className="card-img-top" alt="..."></img>
         <div className="card-body m-2">
            <div>
               <h5 className="row col-12 card-title">{item.name}</h5>
               <div className="row card-text">{item.description}</div>
               <div className="">
                  <btn className={style} onClick={handleInterested}>
                     🌱 {interested ? item.interested : ""}
                  </btn>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ItemCard;