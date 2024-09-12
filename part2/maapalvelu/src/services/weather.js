import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='





const getByCity = (name) => {
    const request = axios.get(baseUrl+name+'&appid=71e612eb9b046d1f9f289754685e644a')
    return request.then(response => response.data)
}


export default { 
 getByCity

}