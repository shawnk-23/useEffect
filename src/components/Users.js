import { useEffect, useState } from "react";


const Users = () => {


let [jsonData,setJsondata] = useState([]);
    useEffect(()=>{
        //https://reqres.in/api/users?page=2


        async function fetchUsers() {
            let response = await fetch('https://reqres.in/api/users?page=2');
            let respJSON = await response.json();
            console.log(respJSON);  
            setJsondata(respJSON.data);  
        }
        fetchUsers();
    }
    );
    return (
        <div>
            <h1> Welcome to users page</h1>   <h2> check console </h2>
           {            
           jsonData.map( (elem) =><h4> {elem.email}</h4> )
            }
        </div>
    );
}
 
export default Users;