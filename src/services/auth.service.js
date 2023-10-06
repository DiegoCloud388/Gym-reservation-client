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
            if(token) {
                localStorage.setItem("token", token);
            }

            return response.data;
        })
    }

    logout() {
        localStorage.removeItem("user");
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
        return JSON.parse(localStorage.getItem('token'));
    }
}

const authService = new AuthService();

export default authService;

