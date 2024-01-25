import { useEffect } from 'react'
import { useRouter } from 'next/router'

const PageNotFound = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return <></>
}

export default PageNotFound
