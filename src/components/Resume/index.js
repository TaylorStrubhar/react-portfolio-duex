import React from 'react';

const Resume = () => {
  return (
    <section className='my-5'>
      <h1 className='resume resume-title'>Ira Strubhar</h1>
      <p className='resume'>
      Full stack web developer leveraging a customer service, sales and art background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of Minnesota, with newly developed skills in JavaScript, MongoDB, CSS, React.js, and responsive web design. Known as an organized, inventive and engaged team member passionate about developing apps, with a focus on mobile-first design and WCAG compliance.</p>   

      <h2 className='resume resume-title'>Technical Skills</h2>
      <h3 className='resume'>Languages:</h3><p className='resume'>React, Node.js, Express, MongoDB, Mongoose, JavaScript, HTML, CSS, GraphQL, SQL, jQuery, Handlebars.js, Material UI</p>
      <h3 className='resume'>Applications:</h3><p className='resume'>MongoDB Compass, Heroku, Insomnia, MySQL Workbench, Apollo Server
      </p>
      <h2 className='resume resume-title'>Experience</h2>
      <p className='resume'>Assistant Manager Customer Success</p><p className='resume'>ARI Network Services</p><p className='resume'>Duluth, MN</p>
      <p className='resume'>---</p>
      <p className='resume'>Sales Account Manager</p><p className='resume'>DBI Beverage Inc.</p><p className='resume'>Sacramento, CA</p>
      <p className='resume'>---</p>
      <p className='resume'>Merchandise Coordinator</p><p className='resume'>Heineken USA</p><p className='resume'>Sacramento, CA</p>
    </section>
  );
};

export default Resume;