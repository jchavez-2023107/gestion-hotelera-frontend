import React from "react" 
import { useEffect, useState } from "react"
import { useHotels } from "../../shared/hooks/Hotels/useHotels" 
import { HotelCard } from "./HotelsCard"
import { Modal } from "../Modal"
//import { getHotelsRequest } from "../../services/apiH" 

export const Hotels = () =>{
    const { hotels, getHotels, isFetchingUpd, updateHotel, addHotels, deleteHotel} = useHotels()
    const [isEdit, setIsEdit] = useState(false)
    const [hotel, setHotel] = useState({})

    const handleAdd = () => {
        setHotel({})
        setIsEdit(false)
    }

    const handleEdit = (hotel) => {
        setHotel(hotel)
        setIsEdit(true)
    }


    useEffect(() => {
        getHotels()
    }, [])

    if (!hotels || isFetchingUpd) {
        return <span>Cargando...</span>
    }
    
    
    return(
        <div className="container">
            <Modal 
                isEdit={isEdit} 
                updateHotel={updateHotel} 
                addHotels={addHotels} 
                hotel={hotel} 
                setIsEdit={setIsEdit}
            />
            <div className="text-center my4">
                <h2 className="fw-bold" style={{ color: '#000' }}>Hoteles</h2>
                <button
                    type="button"
                    className="btn my-3"
                    style={{ backgroundColor: '#5CE1E6', color: '#000' }}
                    data-bs-toggle = 'modal'
                    data-bs-target = '#postsModal'
                    onClick={handleAdd}
                >
                    Agregar Hotel
                </button>
            </div>
            <div className="row g-4">
                {
                    hotels.map((hotel, index) =>{
                        return (
                        <div className="col-12 col-sm-6 col-md-4" key={index}>
                            <HotelCard
                                handleEdit={handleEdit}
                                deleteHotel={deleteHotel}
                                id={hotel._id}
                                name={hotel.name}
                                description={hotel.description}
                                address={hotel.address}
                                phone={hotel.phone}
                                email={hotel.email}
                                quality={hotel.quality}
                            />
                        </div>
                    )})
                }
            </div>
        </div>
    )
}