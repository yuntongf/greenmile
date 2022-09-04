import SellForm from "../large components/SellForm";

const SellPage = ({ handleSell, user }) => {
   return (
      <div>
         <SellForm handleSell={handleSell} user={user} />
      </div>
   );
}

export default SellPage;