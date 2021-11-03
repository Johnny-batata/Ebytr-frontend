import { Route } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Route exact path="/home" component={ Home } />
      <Route exact path="/signup" component={ SignUp } />
      <Route exact path="/" component={ Login } />
    </div>
  );
}

export default App;
