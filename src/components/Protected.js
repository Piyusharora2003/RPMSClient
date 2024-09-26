import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { SigninUser } from '../helperFunctions/SignInhelper';
import { SignUpUser } from '../helperFunctions/SignUphelper';

function Protected({Child}) {
    const auth = getAuth();
    
    async function checkAuth() {
        console.log(auth);
        if (auth.currentUser) {
            return true;
        }
        return false;
    }
    
    const [formType , setFormtype] = useState("Signin")
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [patientID , setPatientID] = useState("");

    async function handleSubmit() {
        if (email === "" || password === "") {
            alert("Invalid email/password entry");
            return;
        }
        if (formType === "Signin") {
            const userdetails = await SigninUser(auth , email , password);            
        }
        else {
            const userdetails = await SignUpUser(auth , email , password , patientID);
            
        }
    }

    function toogleFormType() {
        setFormtype(formType === "Signup" ? "Signin" : "Signup")
    }

    if (checkAuth()) {
        return <Child/>;
    }

  return (
    <div className='w-screen h-screen bg-gray-200 flex'>
        <div className=" px-3 py-6 mx-auto my-auto border-4 border-indigo-500/75 w-full bg-white rounded-lg shadow dark:border  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                  Sign { formType === "Signin" ? "in" : "up"} to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input 
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" name="email" id="email" value={email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="coolperson@gmail.com"
                      />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                        onChange={(e)=>setPassword(e.target.value)} 
                        type="password" name="password" id="password" placeholder="••••••••" value={password}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                  </div>
                  {
                    formType === "Signup" && 
                    <div>
                      <label for="patientID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient ID</label>
                      <input
                        onChange={(e)=>setPatientID(e.target.value)} 
                        type="patientID" name="patientID" id="patientID" placeholder="••••••••" value={patientID}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    }
                    <div 
                        className="w-max cursor-pointer	 mx-auto bg-indigo-500/50 text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={handleSubmit}
                    >
                        {
                            formType === "Signup" ? "Sign up" : "Sign in"
                        }   
                    </div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {
                        formType === "Signin" ?
                        "Don’t have an account yet? " : "Already have an Account "  
                      }
                      <div onClick={toogleFormType} className="font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500">
                        {
                            formType === "Signin" ? "Sign up" : "Sign in "
                        }
                      </div>
                  </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Protected