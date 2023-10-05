import { useEffect, useState } from "react"
import AuthService from '../services/auth.service';

export default function Profile() {
    const [state, setState] = useState(false);

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();

        if(!currentUser)
        setState(true);
    });

    return (
        <h1>{currentUser}</h1>
    )
}