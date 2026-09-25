import { useState } from "react";
import ToastContext from "./ToastContext";
import ToastContainer from "../../components/ToastConainter";

const ToastProvider =({children})=>{
    const [toasts,setToasts]=useState([]);
   

    const addToast = ({message,type})=> {
        setToasts((prevToasts)=>[...prevToasts,{id:Math.random(),message:message,type:type}])
    }

    const removeToast=(id)=>{
        console.log("herewe call remove the toast lets do it",id)
        setToasts(prev=>prev.filter(prev=>prev.id!==id));
    }

    return (
        <ToastContext value={{toasts,addToast,removeToast}}>
            <ToastContainer  />
            {children}
        </ToastContext>
    )
}

export default ToastProvider;