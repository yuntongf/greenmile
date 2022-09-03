import ItemCard from "../large components/ItemCard";

const MarketPage = ({ items }) => {
   console.log(items);
   return (
      <div className="col-12 d-flex justify-content-center mt-4">
         <div className="d-flex row row-cols-5">
            {
               items.map(item => (
                  <div className="col ms-3 me-3">
                     <ItemCard item={item} />
                  </div>
               ))
            }
         </div>
      </div>
   );
}

export default MarketPage;