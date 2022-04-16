import { RegisterForm } from "@components/forms";
import { useParams } from 'react-router-dom';
import { context } from '../context/context';
import { useContext } from 'react';
const Register = () => {
   const { gp } = useParams();
    return (
      <div className="form-wrapper">
        <RegisterForm group={gp} />
      </div>
    );
}
 
export default Register;