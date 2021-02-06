import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5001/reactfirebase-c9983/us-central1/app/api";

class RegisterUser {
    getUser() {
        return axios.get(USER_API_BASE_URL + '/read')
    }

    registerUser(User) {
        return axios.post(USER_API_BASE_URL + '/register', User)
    }

    getUserById(id) {
        return axios.get(USER_API_BASE_URL + '/read/' + id)
    }

    updateUser(User, id) {
        return axios.put(USER_API_BASE_URL + '/update/' + id, User)
    }

    deleteUser(id) {
        return axios.delete(USER_API_BASE_URL + '/delete/' + id)
    }
}


export default new RegisterUser();