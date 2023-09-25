import axios from "axios";

const API_URL = "https://localhost:7215/api/Account/";

class AuthService {
    login(email, password) {
        return axios.post(API_URL + "login", {
            email,
            password
        })
        .then(response => {
            if(response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
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
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();