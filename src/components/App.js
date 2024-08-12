import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Info</h1>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default App;
