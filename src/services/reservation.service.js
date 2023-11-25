import axios from "axios";

const API_URL = "https://localhost:5001/api/GymReservation"

class ReservationService {
    getReservationByUser(userId, onlyActive) {
        return axios.get(API_URL + "get-reservation-by-user", {
            userId,
            onlyActive
        });
    }

    createNewReservation(startDate, endDate, userId, reservationServiceId) {
        return axios.post(API_URL + "create-new-reservation", {
            startDate,
            endDate,
            userId,
            reservationServiceId
        });
    }
}

export default new ReservationService();