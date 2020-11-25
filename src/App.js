import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import Demo from './AntdKitchenSink';
import * as Tone from 'tone'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <h1>current time {moment().format('DD.MM.YYYY HH:mm NNNNN')}</h1>
        <p>
          <a href="/index2">2nd lighter page</a> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={()=>{
        //create a synth and connect it to the main output (your speakers)
        const synth = new Tone.Synth().toDestination();
        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease("C4", "8n");
      }}>Tone</button>
      <Demo />
    </div>
  );
}

export default App;
