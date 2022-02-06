import { Route, Router } from 'react-router-dom';
import styles from './App.module.scss';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';

function App() {
  return (
    <div className={styles.App}>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignUpPage}/>
      <Route path="/" component={HomePage}/>
    </div>
  );
}

export default App;
