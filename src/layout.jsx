import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='container' style={{display : 'flex', justifyContent : 'center', alignItems : 'center', height: "calc(100vh-56px)"}}>
        {children}
    </div>
  )
}

export default Layout 