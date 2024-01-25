import { useRef, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import firebase from 'firebase'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'

import { db, storage } from '../firebase'

function InputBox() {
  const { data: session } = useSession()
  const inputRef = useRef(null)
  const filePickerRef = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)
  const sendPost = e => {
    e.preventDefault()

    if (!inputRef.current.value) return

    db.collection('posts')
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(doc => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, 'data_url')
          removeImage()

          uploadTask.on(
            'state_change',
            null,
            error => console.log.error(error),
            () => {
              storage
                .ref('posts')
                .child(doc.id)
                .getDownloadURL()
                .then(url => {
                  db.collection('posts')
                    .doc(doc.id)
                    .set({ postImage: url }, { merge: true })
                })
            }
          )
        }
      })

    inputRef.current.value = ''
  }

  const addImageToPost = e => {
    const reader = new FileReader()
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])
    reader.onload = readerEvent => setImageToPost(readerEvent.target.result)
  }

  const removeImage = () => setImageToPost(null)

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text=gray-500 font-medium mt-6">
      <div className="py-5 px-2 sm:px-5 flex gap-x-2 sm:gap-x-4 items-center">
        <Image
          alt=""
          className="rounded-full bg-gray-100"
          src={session.user.image}
          width={48}
          height={48}
          layout="fixed"
        />
        <form className="flex flex-grow">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's in your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div className="w-max flex flex-col p-2 gap-2 filter hover:brightness-120 cursor-pointer bg-gray-200 bg-opacity-50 rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-10 object-contain rounded-md"
              src={imageToPost}
              alt="image to post"
            />
            <button
              onClick={removeImage}
              className="p-1 cursor-pointer text-xs text-red-600 bg-red-400 bg-opacity-10 hover:bg-opacity-20 transition-all text-center rounded"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="hidden sm:inline-flex text-xs sm:text-sm xl:text-base">
            {' '}
            Live Video
          </p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="hidden sm:inline-flex text-xs sm:text-sm xl:text-base">
            {' '}
            Photo/Video
          </p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

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
