import RegisterForm from "../large components/RegisterForm";

const RegisterPage = ({ handleRegister }) => {
   return (
      <div>
         <RegisterForm handleRegister={handleRegister} />
      </div>
   );
}

export default RegisterPage;