import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';

import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthLayout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
