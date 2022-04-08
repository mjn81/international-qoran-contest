import { Outlet } from "react-router-dom"; 

import { AuthContainer } from "@components/core";
import Navigation from "@components/navigation/Navigation";




const AuthLayout = () => {
    return (  
        <AuthContainer>
            <Navigation />
            <Outlet />  
        </AuthContainer>
    );
}
 
export default AuthLayout;