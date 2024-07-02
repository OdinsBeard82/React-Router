import React from 'react';
import Image from './component/Image';

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages:</p>
      <nav>
        <ul>
          <li>
            <a href="profile">Profile page</a>
          </li>
        </ul>
      </nav>
      <h1>My React App</h1>
      <Image />
    </div>
  );
};

export default App;

