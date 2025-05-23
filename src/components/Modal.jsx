import React from "react"
import { Form } from "./Form"

export const Modal = ({hotel, isEdit, setIsEdit, updateHotel, addHotels}) => {
    return(
    <div className="modal fade" id="postsModal" tabIndex="-1" aria-labelledby="postsModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header" style={{ backgroundColor: '#3665ef', color: 'white' }}>
            <h1 className="modal-title fs-5" id="postsModalLabel">
                {isEdit ? 'Editar Publicación' : 'Agregar Publicación'}
                    </h1>
                        <button
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                            onClick={()=> setIsEdit(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <Form updateHotel={updateHotel} addHotels={addHotels} hotel={hotel} isEdit = {isEdit} setIsEdit={setIsEdit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}