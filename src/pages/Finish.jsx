import {useParams} from 'react-router-dom';
import { UserContainer } from '@components/core';
import faIR from '@constants/fa-IR';
import './Finish.scss';
const Finish = () => {
    const { msg } = useParams();
    
    return ( 
        <UserContainer>
            <p className="fn">
            {faIR[msg]}       
            </p>
        </UserContainer>
     );
}
 
export default Finish;