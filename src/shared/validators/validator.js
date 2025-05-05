//Crear todas las validaciones de Campos
/* -------------------------- VALIDACIÓN DE CORREO ----------------------- */
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}
/* -------------------------- VALIDACIÓN DE CORREO ----------------------- */

/* ----------------- VALIDACIÓN DE NOMBRE DE USUARIO ------------------- */
export const validateUsername = (username)=>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}
/* ----------------- VALIDACIÓN DE NOMBRE DE USUARIO ------------------- */

/* ----------------- VALIDACIÓN DE CONTRASEÑA ------------------- */
export const validatePassword = (password)=>{
    const regex = /^\S{6,12}$/ //Chetar despues
    return regex.test(password)
}
/* ----------------- VALIDACIÓN DE CONTRASEÑA ------------------- */

/* ----------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ------------------- */
export const validatePassConfirm = (password, passConfirm)=>{
    return password === passConfirm
}
/* ----------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ------------------- */

/* ---------------------------------------------------------------------- */
/* ----------------- MENSAJES GENERALES DE VALIDACIÓN ------------------- */
/* ---------------------------------------------------------------------- */
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const usernameValidationMessage = 'El nombre de usuario debe contener entre 3 y 8 caracteres (Sin espacios)'
export const passwordValidationMessage = 'La contraseña debe tener entre 6 y 12 caracteres, sin espacios'
export const passConfirmValidationMessage = 'Las contraseñas no coinciden'