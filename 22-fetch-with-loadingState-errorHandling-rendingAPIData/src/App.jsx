import React from 'react';
import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

   useEffect(() => {
    const fetchUsers = async() => {
      try {
        let resp = await fetch('https://dummyjson.com/users');
        if(!resp.ok) {
          throw new Error("Something went wrong !!");
        }
        let json = await resp.json();
        setUsers(json.users);
        // console.log(json.users);
      }
      catch(err) {
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    }
    fetchUsers();
   },[])
   
   if(loading) {
    return <h2>LOADING USERS...</h2>
   }
   if(error) {
    return <h2>ERROR: {error}</h2>
   }

  return (
    <div>
      <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.firstName}</li>
      })}
      </ul>
    </div>
  )
}

export default App
