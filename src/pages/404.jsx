import {UserContainer} from '@components/core';
import  faIR  from '@constants/fa-IR';
const NotFound = () => {
    return (
        <UserContainer>
            <h1>{faIR["error.notFound"]}</h1>
        </UserContainer>
      );
}
 
export default NotFound;