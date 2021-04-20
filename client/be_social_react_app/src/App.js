import './App.css';
import LoginPage from './pages/loginPage';
import LogedContent from './pages/common/logedContent';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signin">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <LoginPage />
        </Route>
        <Route path="/">
          <LogedContent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
