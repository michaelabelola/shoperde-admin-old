import { Route, Router, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
