import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function NoPage() {

    function SignUserOut() {
        const navigate = useNavigate();
        const auth = getAuth();
        signOut(auth).then(() => {
            alert("Signout successful");
        }).catch((error) => {
        });    }
    
    return (
    <div>
        Hello 
        <button onClick={SignUserOut}>
            signout
        </button>
    </div>
  )
}

export default NoPage;