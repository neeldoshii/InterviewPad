import React from 'react'
import Avatar from 'react-avatar';

const AvatarComponent = ({username}) => {
  // console.log("Rendered : " + username );
  return (
 
    <Avatar name={username}  size="40px" round="24px" />
  )
}

export default AvatarComponent