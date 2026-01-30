import React from 'react'

export const Avatar = ({image})=>{
    return(
    <img width={100} src = {image}/>
    )
}


const PropAvatar = ({image, name, email, phone}) => {

  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <Avatar image={image} />
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
