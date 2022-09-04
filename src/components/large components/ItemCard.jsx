import e from "cors";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MarketContext from '../contexts/MarketContext';

const ItemCard = ({ item }) => {
   const handleDelete = useContext(MarketContext);
   let [interested, setInterest] = useState(false);

   const handleInterested = () => {
      setInterest(!interested);

   }

   const style = interested ? "btn btn-success m-0" : "btn btn-outline-secondary m-0";

   if (!item) return;

   return (
      <div className="card m-2" style={{ backgroundColor: '#fffefa' }}>
         <Link to={`/Market/${item._id}`} className="text-decoration-none text-dark">
            <img src={item.pic} className="card-img-top" alt=""></img>
            <div className="card-body m-2 d-felx text-decoration-none">
               <div className="col-12">
                  <h5 className="col-12 card-title text-decoration-none">{item.name}</h5>
                  <div className=" card-text text-decoration-none">{item.description}</div>
                  <div className="mt-3 ms-0">
                     🌱 {item.gm}
                  </div>
               </div>
            </div>
         </Link>
         <div className="d-flex justify-content-end m-2">
            <btn className="btn btn-outline" onClick={() => handleDelete(item)}>
               x
            </btn>
         </div>
      </div>
   );
}

export default ItemCard;