import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import workoutTracker from "../../assets/projects/workouttrack-post.png";
import textEdit from "../../assets/projects/textedit-post.png";
import fictionalGuac from "../../assets/projects/fictionalguac-post.png";

class Projects extends React.Component {
  constructor() {
      super();
      this.state = {
        flipped: new Set()
      };
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick(id) {
    return (e) => {
      e.preventDefault();
      let flipped = new Set(this.state.flipped);
      if (flipped.has(id)) {
        flipped.delete(id);
      } else {
        flipped.add(id);
      }
      this.setState({ flipped });
    };
  }


render() {
  // console.log(this.state);
  return (
    <section>
      <ReactCardFlip 
          isFlipped={this.state.flipped.has(1)} 
          flipDirection="horizontal">
            
          <div style={{
              width: '800px',
              height: '300px',
              backgroundImage: `url(${workoutTracker})`,
              fontSize: '40px',
              color: 'white',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'left',
              padding: '20px'
          }}>
              <br />
              <br />
              <br />

              <button style={{
                  width: '150px',
                  padding: '10px',
                  fontSize: '20px',
                  background: 'black',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  borderColor: 'white',
                  borderWidth: 'thin',
                  border: 'solid'
              }} onClick={this.handleClick(1)}>
                  Learn More</button>
          </div>
          <div style={{
              width: '800px',
              height: '300px',
              background: 'black',
              fontSize: '22px',
              color: 'white',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'left',
              padding: '20px'
          }}>
              Title: Workout Tracker App<br />
              Github: <a href='https://github.com/TaylorStrubhar/workout-tracker-app'>Here</a><br />
              Description: An app that lets users track, edit and reference workouts and routines they build for themselves. <br />
              Tools Used: ReactJS, GraphQL
              <br />
              <br />
              <button style={{
                  width: '150px',
                  padding: '10px',
                  fontSize: '20px',
                  background: 'black',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  borderColor: 'white',
                  borderWidth: 'thin',
                  border: 'solid'
              }} onClick={this.handleClick(1)}>
                  Return</button>
          </div>
      </ReactCardFlip>
      <ReactCardFlip 
          isFlipped={this.state.flipped.has(2)} 
          flipDirection="horizontal">
          <div style={{
              width: '800px',
              height: '300px',
              backgroundImage: `url(${textEdit})`,
              fontSize: '40px',
              color: 'white',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'left',
              padding: '20px'
          }}>
              
              <br />
              <br />
              <br />
              <button style={{
                  width: '150px',
                  padding: '10px',
                  fontSize: '20px',
                  background: 'black',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  borderColor: 'white',
                  borderWidth: 'thin',
                  border: 'solid'
              }} onClick={this.handleClick(2)}>
                  Learn More</button>
          </div>
          <div style={{
              width: '800px',
              height: '300px',
              background: 'black',
              fontSize: '22px',
              color: 'white',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'left',
              padding: '20px'
          }}>
              Title: Just Another Text Editor<br />
              Github: <a href='https://github.com/TaylorStrubhar/PWA-text-editor'>Here</a><br />
              Description: A simple progressive web app text editor. Can be run in the browser or installed for offline use.<br />
              Tools Used: Express, IndexedDB, Webpack
              <br />
              <br />
              <button style={{
                  width: '150px',
                  padding: '10px',
                  fontSize: '20px',
                  background: 'black',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  borderColor: 'white',
                  borderWidth: 'thin',
                  border: 'solid'
              }} onClick={this.handleClick(2)}>
                  Return</button>
          </div>
      </ReactCardFlip>
      <ReactCardFlip 
          isFlipped={this.state.flipped.has(3)} 
          flipDirection="horizontal">
          <div style={{
              width: '800px',
              height: '300px',
              backgroundImage: `url(${fictionalGuac})`,
              fontSize: '40px',
              color: 'white',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'left',
              padding: '20px'
          }}>
              
              <br />
              <br />
              <br />
              <button style={{
                  width: '150px',
                  padding: '10px',
                  fontSize: '20px',
                  background: 'black',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  borderColor: 'white',
                  borderWidth: 'thin',
                  border: 'solid'
              }} onClick={this.handleClick(3)}>
                  Learn More</button>
          </div>
          <div style={{
              width: '800px',
              height: '300px',
              background: 'black',
              fontSize: '22px',
              color: 'white',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'left',
              padding: '20px'
          }}>
              Title: Pet Boarding App<br />
              Github: <a href='https://github.com/TaylorStrubhar/pet-boarding-app'>Here</a><br />
              Description: This app lets users register their pet with a pet boarding facility. <br />
              Tools Used: JavaScript, Handlebars, HTML, CSS
              <br />
              <br />
              <button style={{
                  width: '150px',
                  padding: '10px',
                  fontSize: '20px',
                  background: 'black',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  borderColor: 'white',
                  borderWidth: 'thin',
                  border: 'solid'
              }} onClick={this.handleClick(3)}>
                  Return</button>
          </div>
      </ReactCardFlip>
    </section>    
  );
}
}
export default Projects;