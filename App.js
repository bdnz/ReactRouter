import React from 'react';
import { Link } from 'react-router';


const App = (props) => {
  return (
    <div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Classes">Classes</Link></li>
          </ul>
        </div>
        {props.children}
      </div>
  );
};

export default App;