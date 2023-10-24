import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {
  const {user} = useContext(UserContext);
  if (!user) return <div>Please login First!</div>
  return (
    <div>Greeting: {user.username}</div>
  )
}

export default Profile