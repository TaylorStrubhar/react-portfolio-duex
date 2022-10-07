import React from 'react';

const Project = () => {
  return (
    <section>
      <div>
        <p>Workout Tracker</p>
        <a href='https://workout-tracker-app2.herokuapp.com/'>
          <img
            src={require(`../../assets/projects/workouttrack.png`)}
            alt={`Workout Tracker`}
          />
        </a>
      </div>
      <div>
        <p>Text Editor</p>
        <a href='https://github.com/TaylorStrubhar/PWA-text-editor'>
          <img src={require(`../../assets/projects/textedit.png`)} alt={`text editor`} />
        </a>
      </div>
      <div>
        <p>Fictional Guacamole</p>
        <a href='https://github.com/TaylorStrubhar/fictional-guacamole'>
          <img src={require(`../../assets/projects/fictionalguac.png`)} alt={`fictional guacamole`} />
        </a>
      </div>
    </section>
  );
};

export default Project;