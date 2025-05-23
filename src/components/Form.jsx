import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useHotels } from "../shared/hooks/Hotels/useHotels" 

export const Form = ({hotel, isEdit, setIsEdit, updateHotel, addHotels}) => {
    

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm(
        {
            mode: 'onTouched',
            defaultValues: hotel
        }
    )

    useEffect(() => {
        if (hotel && hotel.id) {
            reset({
                _id: hotel.id || '',
                name: hotel.name || '',
                description: hotel.description || '',
                address: hotel.address || '',
                phone: hotel.phone || '',
                email: hotel.email || '',
                quality: hotel.quality || ''
            })
        } else {
            reset()
        }
    }, [hotel, reset])

    const submit = (data) => {
        if (isEdit) {
                updateHotel(data._id, data)
                setIsEdit(false)
        } else {
            addHotels(data)
        }
    }

    return(
        <form onSubmit={handleSubmit(submit)} className="w-100">

            <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ color: '#3665ef' }}>Nombre</label>
                <input 
                    {...register('name', {required: 'El nombre es requerido'})}
                    id = 'name'
                    type="text"
                    className="form-control"    
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="description">Descripcion</label>
                <input 
                    {...register('description', {required: 'La descripcion es requerida'})}
                    id = 'description'
                    type="text"
                    className="form-control"    
                />
                {errors.description && <p>{errors.description.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="address">Direccion</label>
                <input 
                    {...register('address', {required: 'La direccion es requerida'})}
                    id = 'address'
                    type="text"
                    className="form-control"    
                />
                {errors.address && <p>{errors.address.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="phone">Telefono</label>
                <input 
                    {...register('phone', {required: 'El telefono es requerido'})}
                    id = 'phone'
                    type="text"
                    className="form-control"    
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="email">Correo</label>
                <input 
                    {...register('email', {required: 'El correo es requerido'})}
                    id = 'email'
                    type="text"
                    className="form-control"    
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="quality">Calidad</label>
                <input 
                    {...register('quality', {required: 'La calidad es requerida'})}
                    id = 'quality'
                    type="text"
                    className="form-control"    
                />
                {errors.quality && <p>{errors.quality.message}</p>}
            </div>

            <div className="d-flex justify-content-center">
                <button data-bs-dismiss="modal" aria-label="Close" className="btn me-2" style={{ backgroundColor: '#5CE1E6', color: '#000' }}>
                    Cancelar
                </button>
                <button data-bs-dismiss="modal" aria-label="Close" type='submit' className="btn" style={{ backgroundColor: '#38B6ff', color: '#fff' }}>
                    {hotel.name ? 'Actualizar' : 'Agregar'}
                </button>
            </div>
        </form>
    )
}