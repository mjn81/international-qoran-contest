import {UserContainer ,TextLink} from '@components/core';
import  faIR  from '@constants/fa-IR';
const NotFound = () => {
    return (
      <UserContainer>
        <h1>{faIR['error.notFound']}</h1>
        <h2>
          <TextLink to="/">{faIR['error.backHome']}</TextLink>
        </h2>
      </UserContainer>
    );
}
 
export default NotFound;