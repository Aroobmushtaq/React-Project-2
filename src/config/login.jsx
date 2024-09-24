import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth,provider} from'./firebase'
function Login() {
    const click=async()=>{
       try{
        const result=await signInWithPopup(auth,provider)
        console.log(result)
       } catch(error){
        console.error("error",error);
        
       }
    }
  return (
    <div>
      <button className='bg-red-300 ml-8 mt-8' onClick={click}>Countinue with Google</button>
    </div>
  )
}

export default Login
