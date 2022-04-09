import { Outlet } from 'react-router-dom';

import { UserContainer } from '@components/core';
import Logo from '@assets/images/logo.png';
const UserLayout = () => {
  return (
      <UserContainer>
        <img className="logo" src={Logo} alt="Logo" />
        <Outlet />
    </UserContainer>
  );
};

export default UserLayout;
