import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const divStyle = {width:"50%",float:"left",height:"100vh"}
  const bgLeft = {backgroundColor:"#e8cebf"}

  return (
    <div className="App">
      <div style={{...divStyle,...bgLeft}}><ClassComponent/></div>
      <div style={divStyle}><FunctionalComponent/></div>
      
    </div>
  );
}

export default App;
