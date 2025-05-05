import React, { useState } from 'react'
import { Input } from '../Input'
import { useRegister } from '../../shared/hooks/useRegister'
import { emailValidationMessage, passConfirmValidationMessage, passwordValidationMessage, usernameValidationMessage, validateEmail, validatePassConfirm, validatePassword, validateUsername } from '../../shared/validators/validator'
import { Logo } from '../Logo'

export const Register = ({switchAuthAndler}) => {
    const form = {
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        username: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        },
        passwordConfirm: {
            value: '',
            isValid: false,
            showError: false
        }
    }
    const [formData, setFormData] = useState(form)
    const { register } = useRegister()
    const isSubmitButtonDisabled =  !formData.email.isValid ||
                                    !formData.username.isValid ||
                                    !formData.password.isValid ||
                                    !formData.passwordConfirm.isValid

    //Todas las funciones o acciones comienzan con Handle
    const handleSubmit = (event)=>{
        event.preventDefault()
        //const input = document.getElementById('name')
        console.log(formData)
        register(
            formData.email.value,
            formData.username.value,
            formData.password.value
        )
        
    }

    //Validar si el valor es correcto
    const handleValidationOnBlur = (value, field)=>{
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validateEmail(value)
                break;
            case 'username':
                isValid = validateUsername(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfirm':
                isValid = validatePassConfirm(formData.password.value, value)
                break
            default:
                break;
        }
        console.log(isValid)
        setFormData((prevData)=> (
            {
                ...prevData,
                //Inyección de nuevo valor:
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))

    }

    //Cambair el valor del formData
                        //nuevo valor //input que cambió
    const handleValueChange = (value, field)=>{
        setFormData((prevData)=> (
            {
                ...prevData,
                //Inyección de nuevo valor:
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }


  return (
    <div className='register-container'>
        {/* 
            Formularios no controlados (DOM)
            Formularios controlados (RECOMENDABLE EN REACT) (Virtual DOM)
         */}
         <Logo text={"Register 404 NOT FOUND"} />
        <form 
            className='auth-form' 
            action=''
            onSubmit={handleSubmit}>
            <Input 
                field='email' //Tiene que llamarse igual que el formData
                label='Email' 
                value={formData.email.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.email.value}
                type='email'
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.email.showError}
                validationMessage={emailValidationMessage}
            />
            <Input 
                field='username'
                label='Username' 
                onChangeHandler={handleValueChange}
                value={formData.username.value} 
                placeholder={formData.username.value}
                type='text'
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.username.showError}
                validationMessage={usernameValidationMessage}
            />
            <Input 
                field='password'
                label='Password' 
                onChangeHandler={handleValueChange}
                value={formData.password.value} 
                type='password'
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.password.showError}
                validationMessage={passwordValidationMessage}
            />
            <Input 
                field='passwordConfirm'
                label='Password Confirmation' 
                onChangeHandler={handleValueChange}
                value={formData.passwordConfirm.value} 
                type='password'
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.passwordConfirm.showError}
                validationMessage={passConfirmValidationMessage}
            />
            {/*
            <label htmlFor=''>Nombre</label>  
            <input placeholder={name} name='password' onChange={handleChange} type="text" />
           <button onClick={handleSubmit}>Enviar</button> */}
            <button disabled={isSubmitButtonDisabled} type='submit'>Enviar</button>

        </form>
        <span onClick={switchAuthAndler} className="auth-form-switch-label">
            ¡Si ya creaste tu cueta INGRESA AQUI!
        </span>
    </div>
  )
}