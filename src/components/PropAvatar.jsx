import React from 'react'

export const Profile = ()=>{
    return(
    <img width={100} src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="profile"/>
    )
}


const PropAvatar = ({ name, email, phone}) => {

  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <Profile />
            </td>
            <th>Name</th>
            <td>{name}</td>
          </tr>

          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>

          <tr>
            <th>Phone no.</th>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PropAvatar
