import Image from 'next/image'
import { signIn } from 'next-auth/client'

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        alt=""
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={() => signIn('facebook')}
        className="text-center cursor-pointer p-5 bg-blue-500 rounded-full text-white"
      >
        Login with a Facebook account
      </h1>
    </div>
  )
}

export default Login
