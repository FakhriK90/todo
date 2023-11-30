import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PageTask from './component/PageTask';
import HomePage from './component/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer';
import Calendar from './component/Calendar';



function App() {
  return (
    <Router>
      <header>
      <HomePage />
      </header>
      <div className="App">
      <Switch>
        <Route exact path="/" component={PageTask} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>   
    </div>
    <footer>
      <Footer/>
    </footer>
    </Router>
    
  );
}

export default App;
