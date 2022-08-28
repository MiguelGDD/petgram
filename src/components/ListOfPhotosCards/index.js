import React from 'react'
import { PhotoCat } from '../PhotoCat'

export const ListOfPhotosCards = () => {
  return (
    <ul className=''>
      {[1, 2, 3, 4, 5].map((item) => (
        <PhotoCat key={item} />
      ))}
    </ul>
  )
}
