import { useState } from "react";
import useDebounce from "./useDebounce";
const URL ="https://dummyjson.com/users/search"

function App() {
  const [search,setSearch] = useState("");
  const [users,setUsers] = useState([]);

  const SearchUsers=()=>{
    if(!search.trim()){
      setUsers([]);
      return;
    }
    fetch(URL+`?q=${encodeURIComponent(search)}`)
    .then(res=>res.json())
    .then(data=>setUsers(data.users))
    .catch(err=>console.log(err));
  }

  // calls SearchUsers 2s after `search` stops changing
  useDebounce(SearchUsers,500,[search]);

  return (
    <div className="w-screen h-screen bg-black text-white">

     <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
     <div>
      {users.map((user)=>(
        <div key={user.id}>
          <img src={user.image} alt={user.firstName} />
          <h2>{user.firstName} {user.lastName}</h2>
          {/* <p>{user.email}</p> */}
        </div>
      ))}
     </div>
    </div>
  )
}

export default App
