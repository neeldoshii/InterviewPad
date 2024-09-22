import Header from './components/Header';
import React  from 'react';

const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        <div>{children}</div>
    </div>
  )
}

export default MainLayout