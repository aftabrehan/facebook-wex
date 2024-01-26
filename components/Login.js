import { useState } from 'react'
import { signIn } from 'next-auth/react'

import {
  LoginImage,
  FacebookLogo,
  FacebookIcon,
  GoogleIcon,
  LoginIcon,
} from './Icons'

const Login = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const handleAction = async type => {
    setIsDisabled(true)
    await signIn(type, { password: process.env.DEMO_USER_PASSWORD })
    setTimeout(() => setIsDisabled(false), 3000)
  }

  return (
    <div className="flex h-screen">
      <div className="hidden sm:flex w-[40vw] lg:w-[60vw] h-full items-center justify-center bg-[#F4F9FF]">
        <LoginImage className="w-[120%] lg:w-[50%] max-w-2xl" />
      </div>

      <div className="flex flex-col flex-grow h-full items-center justify-center gap-14">
        <FacebookLogo />

        <div className="flex flex-col w-full items-center justify-center gap-3">
          <button
            disabled={isDisabled}
            onClick={() => handleAction('facebook')}
            className="flex items-center justify-center w-full max-w-[320px] gap-2 cursor-pointer px-6 py-3 bg-blue-500 rounded-xl text-white shadow-md hover:shadow hover:opacity-90 transition-all disabled:pointer-events-none disabled:opacity-50"
          >
            <FacebookIcon />
            Sign Up with Facebook
          </button>

          <button
            disabled={isDisabled}
            onClick={() => handleAction('google')}
            className="flex items-center justify-center w-full max-w-[320px] gap-2 cursor-pointer px-6 py-3 rounded-xl text-black text-opacity-50 shadow-md hover:shadow hover:opacity-90 transition-all disabled:pointer-events-none disabled:opacity-50"
          >
            <GoogleIcon />
            Sign Up with Google
          </button>

          <p
            className={`text-black text-opacity-50 ${
              isDisabled ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            OR
          </p>

          <button
            disabled={isDisabled}
            onClick={() => handleAction('credentials')}
            className="flex items-center justify-center w-full max-w-[320px] gap-2 cursor-pointer px-6 py-3 bg-black rounded-xl text-white shadow-md hover:shadow hover:opacity-90 transition-all disabled:pointer-events-none disabled:opacity-50"
          >
            <LoginIcon />
            Login as Guest
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
