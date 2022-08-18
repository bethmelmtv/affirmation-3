import logo from './logo.svg';
import './App.css';
import { getAffirmation } from './services/fetch-utils';

function App() {
  async function handleSubmit() {
    const response = await getAffirmation();
    console.log('response', response);
    return response;
  }
  return (
    <div className="App">
      <button onClick={handleSubmit}>Get Affirmation</button>
    </div>
  );
}

export default App;
