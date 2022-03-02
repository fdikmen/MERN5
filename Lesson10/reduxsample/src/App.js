import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      APP Component
      <User count={12} age="OLD"/>
    </div>
  );
}

export default App;
