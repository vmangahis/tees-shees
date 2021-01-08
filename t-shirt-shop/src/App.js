import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Blogs from './components/Blogs';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path = '/' exact component = {Home}/>
      <Route path = '/shop' component = {Shop}/>
      <Route path = '/blogs' component = {Blogs} />
      <Route path = '/contact' component = {Contact}/>
      </Switch>
    </div>

    </Router>
  );
}

function Home(){
  return(
    <>
      <h1> Welcome! </h1>
    
    </>

  );
}

export default App;
