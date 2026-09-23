import { useEffect } from "react";
import useToast from "../context/Toast/useToast";
const ToastType={"success":"bg-green-500","error":"bg-red-500","warning":"bg-yellow-500","info":"bg-blue-500"};


const Toast=({toast})=>{

    const {removeToast} =useToast();

    useEffect(()=>{
        const timer =setTimeout(()=>{
            removeToast(toast.id);
        },3000);
        return ()=> clearTimeout(timer);
    },[]);
    console.log(toast);

    return (

        <div className={`!w-[500px] flex justify-between items-center border-2 border-white p-2 rounded-md w-full text-white ${ToastType[toast.type]}`}>
            
            <div>{toast.message}</div>
            <div className="cursor-pointer p-2" onClick={()=>{
                console.log(toast.id,"kjdslkfjalksdjf")
                return removeToast(toast.id)}}> x</div>
            
            </div>
    )
}

export default Toast;