import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import UserLayout from './layouts/UserLayout';

import Login from './pages/Login';
import Register from './pages/Register';
import Quiz from './pages/Quiz';
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
        <Route path="/user" element={<UserLayout />}>
          <Route path="quiz" element={<Quiz />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
