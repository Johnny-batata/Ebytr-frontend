import { Route } from 'react-router-dom';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Login } />
    </div>
  );
}

export default App;
