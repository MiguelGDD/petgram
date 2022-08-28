import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCat = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`} className=''>
        <div className='animate-[pulse_3s] rounded-[10px] block overflow-hidden pt-[56.25%] relative w-full'>
          <img
            src={src}
            alt=''
            className='shadow h-full object-cover absolute top-0 w-full'
          />
        </div>
      </a>
      <button className='pt-[8px] flex items-center'>
        <MdFavoriteBorder size='32px' className='mr-[4px]' />
        {likes} likes!
      </button>
    </article>
  )
}
