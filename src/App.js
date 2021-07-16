import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Home from './module/main/pages/home/home.page.jsx';
import MovieDetail from './module/main/pages/movie-detail/movie-detail.page';
import SignIn from './module/main/pages/sign-in/sign-in.page.jsx';
import SignUp from './module/main/pages/sign-up/sign-up.page';
import Header from './module/main/components/header.component.jsx';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/' exact={true}>
            <Home></Home>
          </Route>
          <Route path='/movie-detail'>
            <MovieDetail></MovieDetail>
          </Route>
          <Route path='/sign-in'>
            <SignIn></SignIn>
          </Route>
          <Route path='/sign-up'>
            <SignUp></SignUp>
          </Route>
          <Route path='*'>
            {/* Redirect if not found */}
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
