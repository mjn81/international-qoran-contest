import faIR from '@constants/fa-IR';
import { LoginForm } from '@components/forms';
import { useParams } from 'react-router-dom';
import { context } from '../context/context';
import { useContext, useEffect } from 'react';
const Login = () => {
  const { gp } = useParams();
  const { dispatch } = useContext(context);
  useEffect(() => {
    dispatch({ type: 'setQ', question: gp });
  }, [gp]);
  return (
    <>
      <h3>{faIR['auth.welcome']}</h3>
      <div className="form-wrapper">
        <LoginForm group={gp} />
      </div>
    </>
  );
};

export default Login;
