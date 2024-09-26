import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    
  return (
    <div>
        Home
        <Link className='button  bg-gray-700 text-white font-bold w-max p-3 m-3 ' to={"/clientLogin"}>
            User Login
        </Link>
    </div>
  )
}

export default Home;