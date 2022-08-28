import React from 'react'
import { Category } from '../Category'
import db from '../../../api/db.json'

export const ListOfcategories = () => {
  return (
    <ul className='flex overflow-auto w-full'>
      {db.categories?.map((category) => (
        <li className='px-0 py-[8px]' key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </ul>
  )
}
