import React from 'react'
import PropAvatar from './components/PropAvatar'
const Task2 = () => {

  return (
    <div>
      <PropAvatar
        image = "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations.png"
        name = "Abhinav"
        email = "abhi@gmail.com"
        phone = "7894561230"

      />
      <PropAvatar
        image = "https://randomuser.me/api/portraits/men/32.jpg"
        name = "Sam"
        email = "sam@gmail.com"
        
      />
    </div>
  )
}

export default Task2
