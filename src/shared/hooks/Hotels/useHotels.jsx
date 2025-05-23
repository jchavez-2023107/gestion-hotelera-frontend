import React, { useEffect, useState } from "react"
import {addHotelsRequest, deleteHotelRequest, getHotelsRequest, updateHotelRequest } from '../../../services/apiH'

export const useHotels = () => {
    const [hotels, setHotels] = useState([])
    const [isFetching, setIsFetching] = useState()
    const [isFetchingUpd, setIsFetchingUpd] = useState()

    const getHotels = async() =>{
        setIsFetching(true)
        const response = await getHotelsRequest()
        setIsFetching(false)
        if(response.error){
            console.error(response.err)
            alert ('Error al obtener los Hoteles')
        }
        console.log(response)
        setHotels(response.data.hotel)
    }

    const addHotels = async(hotel) => { 
        const response = await addHotelsRequest(hotel)
        if(response.error){
            console.error(response.err)
            alert ('Error al agregar un Hotel ' + response.err.response.data.message)
        }else{
            console.log(response);
            
            setHotels(prevHotels => [...prevHotels, response.data.hotel])
        }
    }

    const updateHotel = async(id, hotel) => {
        setIsFetchingUpd(true)
        const response = await updateHotelRequest(id, hotel)
        setIsFetchingUpd(false)
        if (response.error) {
            alert('Error al actualizar el hotel')
        } else {
            setHotels(prevHotels => prevHotels.map(h => h._id === id ? response.data.hotel : h))
            console.log(hotels.map(hotel => hotel._id === id ? response.data.hotel : hotel ));
            
            console.log(response);
            
        }
    }

    const deleteHotel = async(id) =>{
        const confirm = prompt('Introduzca el codigo de confirmacion')

        if(confirm !== '123456'){
            alert('Codigo Incorrecto')
            return
        }

        const response = await deleteHotelRequest(id, {confirm: confirm})
        if(response.error){
            console.log(response.err);
            
            alert('Error al eliminar el hotel')
        }else{
            setHotels(prevHotels => prevHotels.filter(hotel => hotel._id !== id ))
        }
    }
    


    return {
        hotels,
        getHotels,
        isFetching,
        isFetchingUpd,
        addHotels,
        updateHotel,
        deleteHotel
    }
}