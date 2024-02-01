import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  {()=>{console.log("puppy id: ", puppy.id)}}

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
    console.log(featuredPup); // Log featuredPup data to the console

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div className="featured">
          <h2 className="custom">{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
