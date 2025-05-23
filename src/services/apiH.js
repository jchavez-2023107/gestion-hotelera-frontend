import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:2636',
        timeout: 3000
    }
)

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token) {
            config.headers.Authorization = token
        }
        return config
    }
)

export const getHotelsRequest = async() => {
    try{
        return await apiClient.get('/api/hotels/getHotel')
    }catch(err){
        return{
            error: true,
            err
        }
    }
}

export const addHotelsRequest = async(data) => {
     console.log("Datos enviados desde frontend:", data)
    try{
        return await apiClient.post('/api/hotels/addHotel', data)
    }catch(err){
        return{
            error: true,
            err
        }
    }
}

export const updateHotelRequest = async(id, hotel) => {
    try{
        return await apiClient.put(`/api/hotels/updateHotel/${id}`, hotel)
    }catch(err){
        return{
            error: true,
            err
        }
        
    }
}

export const deleteHotelRequest = async(id, confirm) => {
    try{
        return await apiClient.delete(`/api/hotels/deleteHotel/${id}`, {data: confirm})
    }catch(err){
        return{
            error: true,
            err
        }
    }
}