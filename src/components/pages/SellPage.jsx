import SellForm from "../large components/SellForm";

const SellPage = ({ handleSell }) => {
   return (
      <div>
         <SellForm handleSell={handleSell} />
      </div>
   );
}

export default SellPage;