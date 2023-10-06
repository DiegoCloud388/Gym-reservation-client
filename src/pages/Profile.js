import { useEffect, useState } from "react"
import AuthService from '../services/auth.service';

export default function Profile() {
    const [state, setState] = useState('');

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();

        if(!currentUser)
        setState(currentUser);
    });

    return (
        <h1>{state}</h1>
    )
}