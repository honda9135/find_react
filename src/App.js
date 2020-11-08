import './App.css';
import Header from './components/layout/Header';
// import BottomNav from './components/layout/BottomNav';
// import Footer from './components/layout/Footer';
import Top from './components/pages/Top';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import Contact from './components/pages/Contact'
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';
import Shop from "./components/pages/Shop"
import history from './config/history';

function App() {
  return (
    <BrowserRouter history={history} forceRefresh={true}>
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/contact' component={Contact} />
          <Route path='/shop/:id' component={Shop} />
        </Switch>
          {/* <BottomNav/>
          <Footer/>  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
