import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    const now = new Date();
    const dateTimeNow = now.toISOString();
    
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkAccessToken = () => {
        const accessToken = localStorage.getItem('token');
        const expiration = new Date(localStorage.getItem('expiration'));

        if(!accessToken || expiration <= dateTimeNow ) {
            setIsLoggedIn(false);
            navigate('/sign-in');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkAccessToken();        
    });

    return(
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}