import logo from './logo.svg';
import './App.css';
import Layout from './Menu/Layout'
import Home from './Home'
import Schedule from './Schedule'
import Tutorials from './Tutorials'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Layout/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/tutorials' component={Tutorials} />
            <Route path='/contact' component={Contact} />
        </Switch>
      </Router>

      </header>
    </div>
  );
}

export default App;
