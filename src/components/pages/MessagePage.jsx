
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const MessagePage = () => {
   const user = useContext(UserContext);
   const messageSent = user.messages.filter((m) => m.from === user._id);
   const messageReceived = user.messages.filter((m) => m.to === user._id);
   return (
      <div className="d-flex justify-content-around m-4">
         <div className="card col-5">
            <h3> Message sent</h3>
            {messageSent.map((m) =>
               <div className='d-flex card ms-4 me-4 mt-3'>
                  <div className='ms-2'>
                     Message to {m.to} :
                  </div>
                  <div className='ms-2'>
                     {m.comment}
                  </div>
               </div>)}
         </div>

         <div className="card col-5">
            <h3 className=''> Message received</h3>
            {messageReceived.map((m) =>
               <div className='d-flex card ms-4 me-4 mt-3'>
                  <div className='ms-2'>
                     Message from {m.from} :
                  </div>
                  <div className='ms-2'>
                     {m.comment}
                  </div>
               </div>)}
         </div>
      </div>
   );
}

export default MessagePage;