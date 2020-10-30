import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SearchBox from './components/pages/SearchBox';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import Contact from './components/pages/Contact'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={SearchBox} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
