import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpeg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Myself</h1>
      <img src={coverImage} className="my-2 img-cover" alt="cover" />
        <p>
            My name is Ira "Taylor" Strubhar and I am a full stack web developer leveraging a customer service, sales and art background to build
a more intuitive user experience on the web. I earned a certificate in full stack
development from the University of Minnesota, with skills in JavaScript,
MongoDB, CSS, React.js, and responsive web design. I'm known as an organized, inventive
and engaged team member passionate about developing apps, with a focus on
mobile-first design, solid UX and WCAG compliance.
        </p>
    </section>
  );
}

export default About;