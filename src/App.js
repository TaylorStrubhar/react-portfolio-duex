import React, { useState } from 'react';
import Nav from './components/Nav';
import Tabs from './components/Tabs';

function App() {
  const [tabs] = useState([
    { name: 'AboutMe', description: 'Photo of me and my about section' },
    { name: 'Contact', description: 'Infomation on where to contact me' },
    {
      name: 'Project',
      description: 'Links and photos of past projects',
    },
    { name: 'Resume', description: 'Link to resume' },
  ]);
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className='content'>
      <header>
        <Nav
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