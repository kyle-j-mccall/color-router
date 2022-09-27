
import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/rgb/:red/:green/:blue' component={Main}/>
        <Route path='*' component={NotFound}/>
      </Switch>
      
    </div>
  );
}

export default App;
