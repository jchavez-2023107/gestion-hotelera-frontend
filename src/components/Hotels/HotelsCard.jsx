import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"

export const HotelCard = ({id,name, description, address, phone, email, quality, handleEdit, deleteHotel}) => {
    return(
        <div className="card border-0 shadow-lg rounded-4 h-100" style={{ backgroundColor: '#ffffff' }}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title fw-bold" style={{ textAlign: 'justify', color: '#3665ef' }}>{name}</h5>
                    <p className="card-subtitle mb-2 text-muted" style={{ textAlign: 'justify' }}>{description}</p>
                    <p className="card-text small" style={{ textAlign: 'justify' }}>{address}</p>
                    <p className="card-text small" style={{ textAlign: 'justify' }}>{phone}</p>
                    <p className="card-text small" style={{ textAlign: 'justify' }}>{email}</p>
                    <p className="card-text fw-semibold" style={{ textAlign: 'justify' }}>Calificacion:  <span className="text-dark">{quality}</span></p>
                </div>

                <div className="d-flex justify-content-end gap-2 mt-3">
                    <button
                        type="button"
                        data-bs-toggle = 'modal'
                        data-bs-target = '#postsModal'
                        className="btn btn-sm d-flex align-items-center gap-1" 
                        style={{ backgroundColor: '#38B6ff', color: 'white' }}
                        onClick={()=> handleEdit({id,name, description,address, phone, email, quality})}
                    >
                        <FaEdit />
                        <span>Editar</span>
                    </button>
                    <button 
                        className="btn btn-sm d-flex align-items-center gap-1"
                        style={{ backgroundColor: '#ff4d4d', color: 'white' }} onClick={()=> deleteHotel(id)}>
                        <FaTrash />
                        <span>Eliminar</span>
                    </button>
                </div>
            </div>
        </div>
    )
}