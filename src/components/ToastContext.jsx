import React, { createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'

export const ToastProvider = ({children}) => {
    const [toasts,setToasts] = useState([])

    const addToast = (message,variant='info') => {
        setToasts([...toasts,{message,variant,id:Date.new()}])
    }

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id != id))
    }
}

const ToastContext = () => {
    const ToastContext = createContext()

    
  return (
    <ToastContext.Provider value = {{addToast,removeToast}}>
        {children}
        <ToastContainer position = "bottom-end" className="p-3"
        {
            toasts.map({id, message, variant}) => (
                <Toast key = {id}
                onClose = {()=>removeToast(id)}
                delay = {3000}
                autohide by = {variant}></Toast>
            )
        }
        </ToastContainer>
        </ToastContext.Provider>
  )
}

export default ToastContext