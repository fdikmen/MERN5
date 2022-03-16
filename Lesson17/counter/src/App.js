import { useState } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const divStyle = {width:"50%",float:"left",height:"100vh"}
  const bgLeft = {backgroundColor:"#e8cebf"}
  const [showComp,setShowComp] = useState(true)

  return (
    <div>
      
      <button style={{marginLeft:"45%"}} onClick={()=>{setShowComp(!showComp)}}>Toggle</button>
      <div className="App">
      {showComp 
      ? <div style={divStyle}><FunctionalComponent/></div>
      : ""}
      
      

      {/* <div style={{...divStyle,...bgLeft}}><ClassComponent/></div> */}
      
    </div>
    </div>
  );
}

export default App;
