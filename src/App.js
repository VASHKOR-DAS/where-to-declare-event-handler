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

  return (
    <div>
      <h1>Team Builder</h1>
      {
        users.map(user => <User user={user}></User>)
      }
    </div>
  );
}

export default App;
