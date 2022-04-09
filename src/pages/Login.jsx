import faIR from '@constants/fa-IR';
import { LoginForm } from '@components/forms';
const Login = () => {
  return (
    <>
      <h3>{faIR['auth.welcome']}</h3>
      <div className="form-wrapper">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
