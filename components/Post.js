import Image from 'next/image'
import { ShareIcon, ChatAltIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Post = ({ name, message, timestamp, image, postImage }) => (
  <div className="flex flex-col">
    <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
      <div className="flex items-center space-x-2">
        <Image
          className="rounded-full bg-gray-100"
          src={image}
          width={40}
          height={40}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-400">
            {timestamp
              ? new Date(timestamp?.toDate()).toLocaleString()
              : 'Loading...'}
          </p>
        </div>
      </div>
      <p className="pt-4"> {message}</p>
    </div>
    {postImage && (
      <div className="relative h-56 md:h-96 bg-white bg-opacity-50">
        <Image src={postImage} objectFit="cover" layout="fill" alt="" />
      </div>
    )}

    <div className="flex justify-between items-center px-4 py-3 rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
      <div className="inputIcon rounded-lg">
        <ThumbUpIcon className="h-4" />
        <p className="text-xs sm:text-base">Like</p>
      </div>
      <div className="inputIcon rounded-lg">
        <ChatAltIcon className="h-4" />
        <p className="text-xs sm:text-base">Comment</p>
      </div>
      <div className="inputIcon rounded-lg">
        <ShareIcon className="h-4" />
        <p className="text-xs sm:text-base">Share</p>
      </div>
    </div>
  </div>
)

export default Post
