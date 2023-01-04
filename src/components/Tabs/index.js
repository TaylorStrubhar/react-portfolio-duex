import React from 'react';
import TabContent from '../TabContent';
import AboutMe from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';

function Tabs({ currentTab }) {
  const tabRender = () => {
    switch (currentTab.name) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <TabContent>{tabRender()}</TabContent>
    </div>
  );
}

export default Tabs;