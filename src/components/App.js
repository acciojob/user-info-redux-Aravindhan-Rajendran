// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail } from './userSlice';

const App = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <div className="app">
      <h1>User Info</h1>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter email" />
        </label>
      </div>
      <div>
        <h2>Current values in store:</h2>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default App;
