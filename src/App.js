import logo from './logo.svg';
import './App.css';
import { getAffirmation } from './services/fetch-utils';

function App() {

async function handleChange() {
  console.log('You clicked submit')
    const response = await getAffirmation();
    return response;
}
  return (
    <div className="App">
      <div>
//       <button onClick={handleChange} >Get Affirmation </button>
//     </div>
    </div>
  );
}

export default App;




