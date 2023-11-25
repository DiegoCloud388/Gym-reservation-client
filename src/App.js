import './App.css';
import "dayjs/locale/cs"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { csCZ } from '@mui/x-date-pickers';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Paperbase from './pages/Paperbase';

import AuthHeaderService from '../src/services/auth-header';
import ProtectedRoute from './components/ProtectedRoute';

const czechLocale = csCZ.components.MuiLocalizationProvider.defaultProps.localeText;

export default function App() {

  AuthHeaderService();

  return (    
    <LocalizationProvider localeText={czechLocale} adapterLocale="cs" dateAdapter={AdapterDayjs}>
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
    </LocalizationProvider>    
  );
}