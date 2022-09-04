import React, { useContext } from "react";
import UserContext from '../contexts/UserContext';
import SaleCard from '../large components/SaleCard';
import MarketContext from '../contexts/MarketContext';
import ItemCard from "../large components/ItemCard";

const UserPage = () => {
   let [handleDelete, items] = useContext(MarketContext);
   const user = useContext(UserContext);
   let marketItems = items.filter((i) => i.owner === user._id)
   let boughtItems = [];
   for (var i = 0; i < items.length; i++) {
      let item = items[i];
      var match = false;
      for (var j = 0; j < item.prices.length; j++) {
         if (item.prices[j].buyer == user._id) {
            match = true;
         }
      }
      console.log(match);
      if (match) {
         boughtItems.push(item);
      }
   }
   var gmsum = 0;
   for (var i = 0; i < marketItems.length; i++) {
      gmsum += marketItems[i].gm;
   }
   for (var i = 0; i < boughtItems.length; i++) {
      gmsum += boughtItems[i].gm;
   }

   return (
      <div className="mt-5 d-flex justify-content-center">
         <div className="col-2">
            <h2 className="col-12 m-5">
               {user.username}'s footprint
            </h2>
            <h3 className="col-12 m-4">🌱{gmsum}gms🚶🏼</h3>

         </div>
         <div className="col-3 m-3 list-group">
            <h3>Interested</h3>
            {boughtItems.map((s) =>
               <div className="list-group-item">
                  <ItemCard item={s} />
               </div>
            )}
         </div>

         <div className="col-6 m-3 list-group">
            <h3>Put on market</h3>
            {marketItems.map((s) =>
               <div className="list-group-item">
                  <SaleCard item={s} />
               </div>
            )}
         </div>
      </div>

   );
}

export default UserPage;