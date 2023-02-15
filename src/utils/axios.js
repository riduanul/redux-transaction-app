import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://transaction-app-two.vercel.app/"
})

export default axiosInstance;