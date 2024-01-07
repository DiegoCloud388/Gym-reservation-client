import axios from "axios";

const API_URL = "https://localhost:5001/api/"

class ReservationService {
    getReservationByUser(userId, onlyActive) {
        return axios.get(API_URL + "GymReservation/get-reservation-by-user", {
            userId,
            onlyActive
        });
    }

    createNewReservation(startDate, endDate, userId, reservationServiceId) {
        return axios.post(API_URL + "GymReservation/create-new-reservation", {
            startDate,
            endDate,
            userId,
            reservationServiceId
        });
    }

    async getAllReservationTimes(onlyActive) {
        return await axios.get(API_URL + "ReservationTime/get-all-reservation-times", {
            params: {
                onlyActive : onlyActive
            }            
        });
    }

    async getReservationForSelectedDate(selectedDate) {
        return await axios.get(API_URL + "GymReservation/get-reservation-for-selected-date", {
            params: {
                selectedDate : selectedDate
            }
        });
    }
}

export default new ReservationService();