import './App.css';
import { useEffect, useState } from 'react';
import User from './component/User/User';

function App() {
  

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  //cart a add krbo member, tai parent a function likhchi
  const addMember = (name) => {
    console.log('member added', name)
  }

  return (
    <div>
      <h1>Team Builder</h1>
      {/* cart a add krr jnne */}




      {
        users.map(user => <User
          user={user}
          addMember={addMember}
        >

        </User>)
      }
    </div>
  );
}

export default App;
