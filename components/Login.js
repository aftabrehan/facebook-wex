import { useState } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/client'

import loginImage from '../public/login.jpg'
import logoBig from '../public/logo-big.png'

const FacebookIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="12" fill="#1877F2" />
    <path
      d="M23.5 12.0699C23.5 5.7186 18.3513 0.569879 12 0.569879C5.64872 0.569879 0.5 5.7186 0.5 12.0699C0.5 17.8099 4.70538 22.5674 10.2031 23.4302V15.3941H7.2832V12.0699H10.2031V9.53629C10.2031 6.6541 11.92 5.06207 14.5468 5.06207C15.805 5.06207 17.1211 5.28668 17.1211 5.28668V8.11675H15.671C14.2424 8.11675 13.7969 9.00322 13.7969 9.91266V12.0699H16.9863L16.4765 15.3941H13.7969V23.4302C19.2946 22.5674 23.5 17.8099 23.5 12.0699Z"
      fill="white"
    />
  </svg>
)

const GoogleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.04 12.2613C23.04 11.4459 22.9668 10.6618 22.8309 9.90906H12V14.3575H18.1891C17.9225 15.795 17.1123 17.0129 15.8943 17.8284V20.7138H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2613Z"
      fill="#4285F4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23.4998C15.105 23.4998 17.7081 22.47 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 12 18.9259C9.00474 18.9259 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z"
      fill="#34A853"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.7581 5.20455 12.0001C5.20455 11.2422 5.33523 10.5051 5.56523 9.81512V6.83557H1.72318C0.944318 8.38807 0.5 10.1444 0.5 12.0001C0.5 13.8558 0.944318 15.6122 1.72318 17.1647L5.56523 14.1851Z"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z"
      fill="#EA4335"
    />
  </svg>
)

const LoginIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.625 12C1.625 12.4142 1.96079 12.75 2.375 12.75H13.3476L11.3869 14.4306C11.0724 14.7001 11.036 15.1736 11.3056 15.4881C11.5751 15.8026 12.0486 15.839 12.3631 15.5694L15.8631 12.5694C16.0293 12.427 16.125 12.2189 16.125 12C16.125 11.7811 16.0293 11.573 15.8631 11.4306L12.3631 8.43057C12.0486 8.161 11.5751 8.19742 11.3056 8.51192C11.036 8.82641 11.0724 9.29989 11.3869 9.56945L13.3476 11.25H2.375C1.96079 11.25 1.625 11.5858 1.625 12Z"
      fill="white"
    />
    <path
      d="M9.375 9.75004H9.75328C9.49473 9.01645 9.6241 8.16876 10.1667 7.53576C10.9754 6.59228 12.3958 6.48301 13.3393 7.29171L16.8393 10.2917C17.338 10.7192 17.625 11.3432 17.625 12C17.625 12.6569 17.338 13.2809 16.8393 13.7084L13.3393 16.7084C12.3958 17.5171 10.9754 17.4078 10.1667 16.4643C9.6241 15.8313 9.49473 14.9836 9.75328 14.25H9.375V16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5466 22 15.375 22H16.375C19.2034 22 20.6176 22 21.4963 21.1213C22.375 20.2426 22.375 18.8284 22.375 16V8C22.375 5.17158 22.375 3.75736 21.4963 2.87868C20.6176 2 19.2034 2 16.375 2H15.375C12.5466 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8V9.75004Z"
      fill="white"
    />
  </svg>
)

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
        <div className="w-full max-w-2xl">
          <Image
            alt="login image"
            src={loginImage}
            objectFit="contain"
            className="mix-blend-multiply"
          />
        </div>
      </div>

      <div className="flex flex-col flex-grow h-full items-center justify-center gap-14">
        <Image
          alt="facebook logo"
          src={logoBig}
          height={300}
          width={300}
          objectFit="contain"
        />

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
