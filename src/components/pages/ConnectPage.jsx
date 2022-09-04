import ConnectForm from '../large components/ConnectForm';
import { useParams } from 'react-router-dom';

const ConnectPage = ({ handleMessage }) => {
   const { id } = useParams();
   return (
      <div>
         <ConnectForm id={id} handleMessage={handleMessage} />
      </div>
   );
}

export default ConnectPage;