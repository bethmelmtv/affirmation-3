import logo from './logo.svg';
import './App.css';
import { getAffirmation } from './services/fetch-utils';
import { useState } from 'react';

function App() {
  const [affirmation, setAffirmation] = useState('');

  async function handleSubmit() {
    const response = await getAffirmation();
    console.log('response', response);
    setAffirmation(response);
    return response;
  }
  return (
    <div className="App">
      <button onClick={handleSubmit}>Get Affirmation</button>
      <p>{affirmation.affirmation}</p>
    </div>
  );
}

export default App;
