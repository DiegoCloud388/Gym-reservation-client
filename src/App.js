import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Paperbase from './pages/Paperbase';

import AuthHeaderService from '../src/services/auth-header';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {

  AuthHeaderService();

  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="paperbase" element={
          <ProtectedRoute>
            <Paperbase/>
          </ProtectedRoute>
        }/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}