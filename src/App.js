import React from 'react'
import { ListOfcategories } from './components/ListOfCategories'
import { ListOfPhotosCards } from './components/ListOfPhotosCards'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <div className='h-[100vh] mx-auto my-0 max-w-[500px] w-full shadow overflow-x-hidden min-h-[100vh] pb-[10px]'>
      <Logo />
      <ListOfcategories />
      <ListOfPhotosCards />
    </div>
  )
}
