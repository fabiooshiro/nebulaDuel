import React from 'react'

import ProfileForm from '../src/Components/profileForm/Profileform'
import '../src/Components/characters/characters.css';
import Cards from "../src/Components/characters/Cards"

const selectCharacters = () => {
  return (
    <div>
        <ProfileForm />
        <Cards />
        {/* <RouterProvider router={router} /> */}
    </div>
  )
}

export default selectCharacters