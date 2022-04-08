import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';


import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Navigate to="/auth/login" />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
