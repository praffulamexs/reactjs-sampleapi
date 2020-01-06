import React from 'react';
import './App.css';
import PostsComponent from './components/posts.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostByIdComponent from './components/postbyid.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3 className="App">Menu</h3>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">All Posts</Link>
              </li>
              <li>
                <Link to="/postByID">Post By ID</Link>
              </li>
            </ul>
          </nav>

        <Switch>
          <Route path="/postByID">
            <PostByIdComponent />
          </Route>
          <Route path="/">
            <PostsComponent />
          </Route>
        </Switch>

        </Router>

      </div>
    )
  }
}

export default App;
