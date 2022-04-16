import faIR from '@constants/fa-IR';
import { OutlinedLink } from '../core';
import './Navigation.scss';
import Logo from '@assets/images/logo.png';

import { context } from '../../context/context';
import { useContext } from 'react';

const Navigation = () => {
  const { state } = useContext(context);
  return (
    <header className="top-header">
      <h2>{faIR['auth.title']}</h2>
      <div className="btn-container">
        <OutlinedLink to={`/auth/login/${state?.question ?? ''}`}>{faIR['auth.login']}</OutlinedLink>
        <OutlinedLink to={`/auth/register/${state?.question ?? ''}`}>{faIR['auth.register']}</OutlinedLink>
      </div>
      <img src={Logo} alt="logo" className="logo" />
      <h2>{faIR['auth.description']}</h2>
    </header>
  );
};

export default Navigation;
