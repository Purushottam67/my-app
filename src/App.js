import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Benefits of using react...
        </h2>
        
          <ol type="1"> 
<li > Component-based architecture</li>
<li > Virtual DOM for effiecient uodates</li>
<li > Rich ecosystem and community</li>
<li > Cross platform development</li>
<li > Strong community support</li>
          </ol>
        <button>
          Get started
        </button>
      </header>
    </div>
  );
}

export default App;