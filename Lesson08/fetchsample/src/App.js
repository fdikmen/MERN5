import "./App.css";
import { Link, NavLink } from "react-router-dom";
const userIds = [1, 3, 5, 7, 123];
function App() {
  return (
    <div className="App">
      {/* App.js for Fetching
      <UserList/>
      <hr/>
      <PostList/> */}
      {/* <PersonList/>
      <PersonAdd/> */}
   
      <Link to="/">Home Page</Link> |{"  "}
      <Link to="/Link1">First Link</Link> |{"  "}
      <Link to="/Link2" style={{ display: "block", color: "yellowgreen" }}>
        Second Link
      </Link>
      <Link to="/PersonList">Person List</Link> |{"  "}
      <Link to="/PersonAdd">Person Add</Link> |{"  "}
      <Link to="/PersonAll">Person All Components</Link> |{"  "}
      <NavLink
        to="/ActiveLink"
        style={({ isActive }) => {
          return { margin: "1rem 0", color: isActive ? "red" : "gray" };
        }}
      >
        Active Link Test
      </NavLink>
      {/* <NavLink to="/ActiveLink" className={(isActive)=>{return isActive ? "class1":"class2"}}></NavLink> */}
      {userIds.map((id, index) => (
        <Link key={index} to={`/PersonDetail/${id}`}>
          {" "}
          <br /> User {index + 1}
        </Link>
      ))}
        
    </div>
  );
}
export default App;
