import faIR from "@constants/fa-IR";
import { OutlinedButton } from "../core";
import './Navigation.scss';



const Navigation = () => {
    return (
      <header className="top-header">
        <h1>{faIR['auth.title']}</h1>
        <OutlinedButton>{faIR['auth.login']}</OutlinedButton>
        <OutlinedButton>{faIR['auth.register']}</OutlinedButton>
      </header>
    );
}
 
export default Navigation;