import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  
    const [user, setUser] = useState('')

    

    useEffect(() => {
        const getUser = async () => {
            const res =   await axios.get("http://localhost:3000/api/user" , {withCredentials: true})    
             setUser(res.data);
             console.log(res.data);
          }

          getUser()
    }, [])

   return (
    <>

      <main className='w-full h-screen flex items-center justify-center bg-gray-100' >

        <section className='flex flex-col items-center ' > 
            <img src={user.picture}  className='w-32 h-32 rounded-full z-10' />
            <h1 className='text-lg font-medium mt-2' > {user.name}</h1>
            <h1 className='text-lg text-gray-500 mt-2' >{user.email}</h1>
        </section>
        


      </main>
      
    </>
  )
}

export default Dashboard
