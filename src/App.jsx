
import useToast from "../context/Toast/useToast"

function App() {
  const {addToast} =useToast();
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="flex flex-col items-start p-0 gap-2">

      <button  className="border-2 p-2 border-green-200" onClick={()=>addToast({"message":"Success","type":"info"})}>add success toast</button>
      <button className="border-2 p-2 border-red-200"  onClick={()=>addToast({"message":"error","type":"error"})}>add error toast</button>


      </div>
      {/* <Toast/> */}
    </div>
  )
}

export default App
