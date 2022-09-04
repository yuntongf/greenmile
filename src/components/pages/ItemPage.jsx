import React, { useContext, useState, use } from "react";
import MarketContext from "../contexts/MarketContext";
import ItemCard from "../large components/ItemCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getItem } from "../../services/ItemServices";
import PriceForm from "../large components/PriceForm";

const ItemPage = ({ handlePrice }) => {
   const items = useContext(MarketContext);
   const { id } = useParams();
   const [item] = items.filter((item) => item._id === id);

   return (
      <div className="d-flex justify-content-center">
         <div className="col-4">
            <div className="d-flex justify-content-center mt-4">
               <div className="col-12 ms-5 mt-3">
                  <div className="col">
                     <ItemCard item={item} />
                  </div>
               </div>
            </div>
         </div>
         <div className="col-5">
            <PriceForm item={item} handlePrice={handlePrice} />
         </div>
      </div>
   );
}

export default ItemPage;