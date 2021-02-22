import Deals from './components/Deals';
import Cart from './components/Cart';
import Home from './components/Home';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/deals'>
          <Deals />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
