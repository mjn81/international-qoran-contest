import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';


import { ContextProvider } from './context/context';

import AuthLayout from './layouts/AuthLayout';
import UserLayout from './layouts/UserLayout';
import Finish from './pages/Finish';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Quiz from './pages/Quiz';
import NotFound from './pages/404';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="login/:gp" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="register/:gp" element={<Register />} />
          </Route>
          <Route path="/user" element={<UserLayout />}>
            <Route path="quiz" element={<Navigate to="/" />} />
            <Route path="quiz/:gp" element={<Quiz />} />
            <Route path="finished/:msg" element={<Finish />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
