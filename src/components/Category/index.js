import React from 'react'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <a className='flex flex-col text-center no-underline w-[75px]' href={path}>
    <img className='border border-1 shadow-lg rounded-[50%] overflow-hidden object-cover w-[75px] h-[75px]' src={cover} />
    {emoji}
  </a>
)
