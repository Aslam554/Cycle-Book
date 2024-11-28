import React from 'react'

const login = () => {

      
  return (
    <div className='bg-white w-[350px] h-[60vh] border-2 mx-auto my-[10%] border-white rounded-lg p-[45px] hover:drop-shadow-2xl hover:transition-all hover:scale-[1.02] duration-100'>
     <form action={handleSignIn}>
        <h1>Welcome back 👏 </h1>
        <h1 className='text-[20px] mb-8 font-bold'>Sign in to your account</h1>

        <label>Your Email</label><br />
        <input type="email" name='email' className='border-2 text-[20px] px-2 rounded-lg mb-4'  placeholder='xyz12@gmail.com' value={setSignInFormData[name]}
              onChange={(event) =>
                setSignInFormData({
                  ...signInFormData,
                  [event.target.name]: event.target.value,
                })
              }/>
        <br />
        <label >Password</label><br />
        <input type="password" name='password' className='border-2 text-[20px] px-2 rounded-lg mb-6'  placeholder='your password' value={setSignInFormData[name]}
              onChange={(event) =>
                setSignInFormData({
                  ...signInFormData,
                  [event.target.name]: event.target.value,
                })
              }/>
        <br />
        <input type="submit" value="Login" className='bg-[#502ec3] text-[22px] text-white px-20 w-[250px] rounded-lg hover:bg-[#f5e60d] hover:text-black hover:transition-all hover:scale-[1.02] duration-100 ' />
     </form>
     <p className='mt-[15px]'>Don't have account <Link href='signup' className='underline text-[#502ec3]'>sign up</Link> now</p>
    </div>
  )
}

export default login