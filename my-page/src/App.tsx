import './App.css';
import Records from './records.json';

const App = () => (
  <div className='App'>
    <h1>Hello!</h1>
    <p>My name is {Records['First name']}. I live in {Records.City}.</p>
    <h2>My contacts:</h2>
    <p>{Records['E-mail']}, {Records.Phone}</p>
  </div>
)

export default App;
