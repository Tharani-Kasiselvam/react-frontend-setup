import { createContext, useContext, useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([])

    const addToast = (message) => {
        console.log("Inside addToast: ",message)
        setToasts([...toasts, { message, id: new Date() }])
    }

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id != id))
    }

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer position="top-center" className="p-3 text-align-center">
                {
                    toasts.map(({ id, message}) => (
                        <Toast key={id}
                            onClose={() => removeToast(id)}
                            delay={3000}
                            autohide 
                            // by={variant}
                            className = 'bg-primary text-white border-radius-3p'
                        >
                        <Toast.Body>{message}</Toast.Body>
                        </Toast>
                    ))
                }
        </ToastContainer>
        </ToastContext.Provider>
    )
}
export const useToast = () => useContext(ToastContext)