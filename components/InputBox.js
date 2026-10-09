import { useRef, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString, deleteObject } from 'firebase/storage'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'

import { getFirebase } from '../firebase'

function InputBox() {
  const { data: session } = useSession()
  const inputRef = useRef(null)
  const filePickerRef = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')
  const sendingRef = useRef(false)
  const sendPost = async e => {
    e.preventDefault()
    const message = inputRef.current.value.trim()
    if (!message || !session?.user || sendingRef.current) return
    sendingRef.current = true
    setIsSending(true)
    setError('')
    let uploadedRef
    try {
      const { db, storage } = getFirebase()
      let postImage
      if (imageToPost) {
        uploadedRef = ref(storage, `posts/${crypto.randomUUID()}`)
        await uploadString(uploadedRef, imageToPost, 'data_url')
        postImage = await getDownloadURL(uploadedRef)
      }
      await addDoc(collection(db, 'posts'), {
        message,
        name: session.user.name || 'Guest',
        email: session.user.email || '',
        image: session.user.image || '/logo.png',
        timestamp: serverTimestamp(),
        ...(postImage ? { postImage } : {}),
      })
      inputRef.current.value = ''
      removeImage()
    } catch {
      if (uploadedRef) await deleteObject(uploadedRef).catch(() => {})
      setError('Your post could not be saved. Please try again.')
    } finally {
      sendingRef.current = false
      setIsSending(false)
    }
  }

  const addImageToPost = e => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
      setError('Choose an image smaller than 5 MB.')
      e.target.value = ''
      return
    }
    const reader = new FileReader()
    reader.onload = event => { setImageToPost(event.target.result); setError('') }
    reader.onerror = () => setError('The image could not be read.')
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setImageToPost(null)
    if (filePickerRef.current) filePickerRef.current.value = ''
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="py-5 px-2 sm:px-5 flex gap-x-2 sm:gap-x-4 items-center">
        <Image
          alt=""
          className="rounded-full bg-gray-100"
          src={(session?.user?.image || '/logo.png')}
          width={48}
          height={48}

        />
        <form onSubmit={sendPost} className="flex grow min-w-0">
          <input
            className="rounded-full h-12 bg-gray-100 grow px-5 focus:outline-none"
            type="text"
            aria-label="Post message"
            disabled={isSending}
            ref={inputRef}
            placeholder={`What's in your mind, ${(session?.user?.name || 'Guest')}?`}
          />
          <button disabled={isSending} className="ml-2 text-blue-600 disabled:opacity-50" type="submit">
            {isSending ? 'Posting…' : 'Post'}
          </button>
        </form>

        {imageToPost && (
          <div className="w-max flex flex-col p-2 gap-2 filter hover:brightness-120 cursor-pointer bg-gray-200/50 rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-10 object-contain rounded-md"
              src={imageToPost}
              alt="image to post"
            />
            <button
              onClick={removeImage}
              className="p-1 cursor-pointer text-xs text-red-600 bg-red-400/10 hover:bg-red-400/20 transition-all text-center rounded"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {error && <p role="alert" className="px-5 pb-3 text-red-700">{error}</p>}
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="hidden sm:inline-flex text-xs sm:text-sm xl:text-base">
            {' '}
            Live Video
          </p>
        </div>

        <button
          type="button"
          disabled={isSending}
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="hidden sm:inline-flex text-xs sm:text-sm xl:text-base">
            {' '}
            Photo/Video
          </p>
          <input
            aria-label="Attach an image"
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            accept="image/*"
            hidden
          />
        </button>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="hidden sm:inline-flex text-xs sm:text-sm xl:text-base">
            {' '}
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
