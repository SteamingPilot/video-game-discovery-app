import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '818c35d517494be7a2d5241a0f857db4'
    }
})