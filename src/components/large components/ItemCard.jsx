import e from "cors";
import React, { useState } from "react";

const ItemCard = ({ item }) => {
   let [interested, setInterest] = useState(false);

   const handleInterested = () => {
      setInterest(!interested);
      if (!interested)
         item.interested++;
      else item.interested--;

   }
   const style = interested ? "btn btn-success m-0" : "btn btn-outline-secondary m-0";

   return (
      <div className="card m-2">
         <img src="..." className="card-img-top" alt="..."></img>
         <div className="card-body m-2">
            <div className="">
               <h5 className="row col-12 card-title">{item.name}</h5>
               <div className="row card-text">{item.description}</div>
               <div className="mt-3">
                  <btn className={style} style={{ width: 70 }} onClick={handleInterested}>
                     🌱 {item.interested}
                  </btn>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ItemCard;