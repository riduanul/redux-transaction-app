import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://redux-transaction-server998.onrender.com/"
})

export default axiosInstance;