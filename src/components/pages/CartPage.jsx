import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import ItemCard from "../large components/ItemCard";

const CartPage = () => {
   const user = useContext(UserContext);
   console.log(user.sales);
   let gm = 0;
   for (var i = 0; i < user.sales.length; i++) {
      console.log(user.sales[i].gm);
   }
   return (
      <div className="d-flex justify-content-center">
         <div className="col-2">
            <h2 className="col-12 m-5">
               {user.username}'s cart
            </h2>
            <h3>🌱 {gm} gms</h3>

         </div>
         <div className="col-6 m-3 list-group">
            {user.sales.map((s) =>
               <div className="list-group-item">
                  <ItemCard item={s} />
               </div>
            )}
         </div>
      </div>
   );
}

export default CartPage;