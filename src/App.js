import './App.css';
import Header from './components/Header/Header';
import Platform from './components/Platform/Platform';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';

import Teacher from'./components/Teacher/Teacher';
import About from'./components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Header></Header>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/platform">
          <Platform></Platform>
          </Route>
          <Route path="/teacher">
            <Teacher></Teacher>
          </Route>
          <Route path="/about">
           <About></About>
          </Route>
          <Route exact path ="/">
             <Home></Home>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
