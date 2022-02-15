import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import PostList from './components/PostList';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';

function App() {
  return (
    <div className="App">
      {/* App.js for Fetching
      <UserList/>
      <hr/>
      <PostList/> */}
      <PersonList/>
      <PersonAdd/>
    </div>
  );
}

export default App;
