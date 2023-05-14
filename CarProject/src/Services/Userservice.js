import axios from 'axios'

const USERS_URL = 'http://localhost:9091/users';


class UserServices {

    getUsers(){
      return axios.get(USERS_URL);
    }
}

export default new UserServices();