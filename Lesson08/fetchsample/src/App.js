import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import PostList from './components/PostList';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import {Link,NavLink,Routes,Route} from 'react-router-dom'
import PersonDetail from './components/PersonDetail';
const userIds = [1,3,5,7,123]
function App() {
  return (
    <div className="App">
      {/* App.js for Fetching
      <UserList/>
      <hr/>
      <PostList/> */}
      {/* <PersonList/>
      <PersonAdd/> */}
        <Routes> 
        <Route path="/" element={<h1>Main Page with /(slash)</h1>}/>
        <Route index element={<h1>Main Page with Index props</h1>}/>
        <Route path='/Link1' element={<h1>Link1 Page</h1>}/>
        <Route path='/Link1' element={<h1>Link1 Page but Second</h1>}/>
        <Route path='/Link2' element={<h1>Link2 Page</h1>}/>       
      </Routes>
      <Link to="/">Home Page</Link> |{"  "}
      <Link to="/Link1">First Link</Link> |{"  "}
      <Link to="/Link2" style={{display:"block",color:'yellowgreen'}}>Second Link</Link>
      <Link to="/PersonList">Person List</Link> |{"  "}
      <Link to="/PersonAdd">Person Add</Link> |{"  "}
      <Link to="/PersonAll">Person All Components</Link> |{"  "}
      <NavLink to="/ActiveLink" style={({isActive})=>{
        return {margin:"1rem 0",color:isActive ? "red" : "gray"}
      }}>Active Link Test</NavLink>
      {/* <NavLink to="/ActiveLink" className={(isActive)=>{return isActive ? "class1":"class2"}}></NavLink> */}
      
      {userIds.map((id,index)=>(
       <Link key={index} to={`/PersonDetail/${id}`}> <br/> User {index+1}</Link>
      ))}

      <Routes>
      <Route path='/ActiveLink' element={<h1>Active Link Test Page</h1>}/>
        <Route path='/PersonList' element={<PersonList/>}/>
        <Route path='/PersonAdd' element={<PersonAdd/>}/>
        <Route path='/PersonAll' element={<>
        <h1>All Elements</h1>
          <PersonList/>
          <PersonAdd/>
        </>}/>
        <Route path='PersonDetail/:personId' element={<PersonDetail/>}></Route>
        <Route path='*' element={<h1>There's nothing here!<br/><b>404 Not Found!</b></h1>}/>
      </Routes>
      </div>
  )
}
export default App