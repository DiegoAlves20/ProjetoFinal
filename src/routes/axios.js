import axios from "axios"
const instance = axios.create({
        baseURL : 'http://10.92.198.40:8080/api'
    })

export default instance