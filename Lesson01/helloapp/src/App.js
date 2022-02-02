import logo from './logo.svg';
import './App.css';
import BlogComp from './components/Blog'

function App() {
  let headerone = <div>LET HEADER ONE</div>
  let content = <div>
    <h1>App.js</h1>
     <p>Prf <b>Bold</b> <i>ITALIC</i> {5/2} <b>--</b> {5/2 == 2.5 ? "YES" : "NO"}</p>
<img src={logo} alt="Logo" className="App-logo" />
      {headerone}
  </div>

let blogInfos = [
  { textHead: "Blog 1", textDesc: "Blog 1 Description" },
  { textHead: "Blog 2", textDesc: "Blog 2 Description" },
  { textHead: "Blog 3", textDesc: "Blog 3 Description" },
  { textHead: "Blog 4", textDesc: "Blog 4 Description" },
  { textHead: "Blog 5", textDesc: "Blog 5 Description" },
  { textHead: "Blog 6", textDesc: "Blog 6 Description" },
  { textHead: "Blog 7", textDesc: "Blog 7 Description" },
];


  return (
    <div className="App">
     {/* {content} */}
      <BlogComp data={blogInfos}/>
{/* <BlogComp></BlogComp> */}
    </div>
  );
}

export default App;
