import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/Login.jsx';
import Signup from './pages/SignUp.jsx';
import AppPage from './pages/AppPage.jsx';
import ProtectedRoute from './components/ProtectedRoute';
function App() {

  return (
    <>
      <Router>
        <div className='app'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/app" element={
              <ProtectedRoute>
                <AppPage />
              </ProtectedRoute>
            } />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
