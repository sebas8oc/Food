import './App.css';
import Detail from './components/Detail/Detail';
import Home from './views/Home/Home';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './views/LandingPage/Landing';
import Form from './views/Form/Form';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
        <Route path='/recipe/:id' component={Detail} />
        <Route path='/form' component={Form} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
