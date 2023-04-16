import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

const pee = (process.env.REACT_APP_API_KEY);

function App() {
  const [image, setImage] = useState('')

  const handleChange = () => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key='
      + pee + '&order_by=random').then(res => {
        const uri = (res.data.faces[0].urls[4][512])
        uri && setImage(uri)
      }).catch(err => {
        console.log(err.message);
      });
  }

  return (
    <div className="App">
      <h1 className="line-1 anim-type">AI Photo Generator</h1>
      {image && <img src={image} alt="AI Face" />}
      <button className="btn" type="button" onClick={handleChange}>Generate</button>
    </div>
  );
}

export default App;
