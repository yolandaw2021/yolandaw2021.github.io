import React from 'react';
import './default.css';
import Introduction from './introduction';
import Research from './research';
import Projects from './projects';
import Teaching from './teaching';

function Body() {
  return (
    <div className="main-body">
      <Introduction name = "Yolanda Wang"/>
      <Research />
      <Projects />
      <Teaching />
    </div>
  );
}

// const Body = () => <div> <h1>Yolanda Wang</h1></div>

export default Body;
