import Toast from "./Toast";


const ToastContainer =({toasts})=>{
return (
<div className="absolute top-0 right-0 bg-white-200 p-2">

{toasts.map((toast) => <Toast key={toast.id} toast={toast} />)}
{/* <Toast/> */}
</div>
)
}

export default ToastContainer;