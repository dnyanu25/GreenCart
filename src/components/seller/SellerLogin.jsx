import React ,{useEffect, useState} from 'react'
import { useAppContext } from '../../context/appContext'


const SellerLogin = () => {
    const { isSeller, setIsSeller, navigate } = useAppContext()
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        setIsSeller(true);
    }

    useEffect(()=>
    { if(isSeller){
            navigate("/seller");
        }
    },[isSeller])

    return  !isSeller &&(
       <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm
       text-gray-600' >

        <div className='flex flex-col gap-5 m-auto items-start p-8 py-12
        min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200'>
          <p className='text-1xl font-medium m-auto'></p>
            <span className='text-primary'>Seller Login</span>

            <div className='w-full'>
                <p>Email</p>
                <input  onChange={(e) => setEmail(e.target.value)}  value={email}
                type="email" placeholder='Enter your Email'
                className='border border-gray-200 rounded w-full  p-2 outline-primary'
                required />
           </div>

           <div className='w-full'>
               <p>Password</p>
               <input  onChange={(e) => setPassword(e.target.value)}  value={password}
               type="password" placeholder='Enter your password'
               className='border  gap-6 border-gray-200 rounded w-full  p-2 outline-primary'
               required /></div>
               <button className='bg-primary  text-white rounded-md w-full py-2
               cursor-pointer'>Login</button>

               <label className='text-xs outline-none text-gray-400'>mail:admin@ex.com & password:admin</label>
              
           </div>


    
           
       </form>
    )
}

export default SellerLogin
