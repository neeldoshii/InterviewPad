// import Header from './components/Header';
import React  from 'react';
import InterviewHeader from './components/InterviewHeader';

const MainLayout = ({children, navlinks, selectedTab, onTabSelect}) => {
  return (
    <div>
        {/* <Header /> */}
        <InterviewHeader navlinks={navlinks} selectedTab={selectedTab} onSelected={onTabSelect} />
        <div style={{ padding: '20px' }}>
          {children} {/* This will render the specific content based on the selected tab */}
      </div>
    </div>
  )
}

export default MainLayout