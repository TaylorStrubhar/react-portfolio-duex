import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Tabs from './components/Tabs';
import ReactCardFlip from "react-card-flip";

function App() {
  const [width, setWindowWidth] = useState(0)
    useEffect(() => {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
        return () =>
          window.removeEventListener("resize", updateDimensions);
    }, []);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  };
  const [tabs] = useState([
    { name: 'Home', description: 'Photo of me and my about section' },
    { name: 'Contact', description: 'Infomation on where to contact me' },
    {
      name: 'Projects',
      description: 'Links and images of past projects',
    },
    { name: 'Resume', description: 'Link to resume' },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);


  // const showNav = {
  //   display: showNav ? 'flex' : 'none',
  // }

  // const showMenuIcon = {
  //   display: showNav ? 'none' : 'flex',
  // }

  // const responsive = {
  //   showNav: width > 1023
  // };

  return (
    <div className='content' id='nav-container'>
      <header>
        <Nav 
          id='navigation'
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        ></Nav>
      </header>
      <main>
        <Tabs currentTab={currentTab}></Tabs>
      </main>
    </div>
  );
}



export default App;