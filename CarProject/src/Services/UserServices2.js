import axios from 'axios'

const CARS_URL = 'http://localhost:9091/getcars';


class UserServices2{

    getCars(){
      return axios.get(CARS_URL);
    }
}

export default new UserServices2();