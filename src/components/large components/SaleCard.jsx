import e from "cors";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MarketContext from '../contexts/MarketContext';

const SaleCard = ({ item }) => {
   let [interested, setInterest] = useState(false);
   const [handleDelete] = useContext(MarketContext);

   const handleInterested = () => {
      setInterest(!interested);
      if (!interested)
         item.interested++;
      else item.interested--;

   }

   const style = interested ? "btn btn-success m-0" : "btn btn-outline-secondary m-0";

   if (!item) return;

   return (
      <div>
         <div className="mt-3 d-flex justify-content-around">
            <div className="col-5">
               <h5 className="">{item.name}</h5>
               <div className=" card-text">{item.description}</div>
               <div className="mt-3 ms-0">
                  {/*<btn className={style} style={{ width: 70 }} onClick={handleInterested}></btn>*/}
                  🌱 {item.gm}
               </div>
            </div>
            <div className="m-2">
               <btn className="btn btn-outline-danger" onClick={() => handleDelete(item)}>
                  delete
               </btn>
            </div>
         </div>
         <div className="card m-3">
            {item.prices.map((p) =>
               <div className="m-2 card d-flex justify-content-around">
                  <div className="card ps-3 pe-3 pt-2 pb-2">
                     <div className="">
                        {p.comment}
                     </div>
                  </div>
                  <div className="ms-3 mt-2 d-flex justify-content-between">
                     ${p.price}

                     <Link to={`/Connect/${p.buyer}`}>
                        <btn className="btn btn-secondary">
                           chat
                        </btn>
                     </Link>
                  </div>
               </div>)}
         </div>
      </div>
   );
}

export default SaleCard;