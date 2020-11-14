import './App.css';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import Top from './components/pages/Top';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import Contact from './components/pages/Contact'
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';
import Menu from "./components/pages/Menu"
import history from './config/history';
import Shop from './components/pages/Shop';
import MyShop from './components/pages/MyShop';

function App() {
  return (
    <BrowserRouter history={history} forceRefresh={true}>
      <div className="App">
        <Header/>
        <main style={{overflow:"auto", marginBottom:"20%"}}>
          <Switch>
            <Route exact path='/' component={Top} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/contact' component={Contact} />
            <Route path="/shop/:id" component={Shop}/>
            <Route path='/menu/:id' component={Menu} />
            <Route path='/myshop' component={MyShop} />
          </Switch>
        </main>
        <BottomNav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
