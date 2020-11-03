import './App.css';
import Header from './components/layout/Header';
// import BottomNav from './components/layout/BottomNav';
// import Footer from './components/layout/Footer';
import SearchBox from './components/pages/SearchBox';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import Contact from './components/pages/Contact'
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={SearchBox} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/contact' component={Contact} />
        </Switch>
          {/* <BottomNav/>
          <Footer/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
