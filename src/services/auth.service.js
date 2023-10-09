import axios from "axios";

const API_URL = "https://localhost:7215/api/Account/";

class AuthService {
    login(email, password) {
        return axios.post(API_URL + "login", {
            email,
            password
        })
        .then(response => {
            const token = response.data.accessToken;
            const expiration = response.data.expiration;
            if(token) {
                localStorage.setItem("token", token);
                localStorage.setItem("expiration", expiration);
            }

            return response.data;
        })
    }

    logout() {
        localStorage.removeItem("token");
    }

    register(firstName, lastName, email, password) {
        return axios.post(API_URL + "register-user", {
            firstName,
            lastName,
            email,
            password
        });
    }

    getCurrentUser() {
        return localStorage.getItem('token');
    }
}

const authService = new AuthService();

export default authService;

