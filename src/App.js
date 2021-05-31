import './App.scss';
import Header from './components/Header.js';
import FooterBanner from './components/FooterBanner.js';
import Footer from './components/Footer.js';
import Store from './components/Store.js';
import Home from './components/Home.js';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Switch } from 'react-router-dom';





function App() {

  return (
      <div className="App">
            <Router>
                  <Header/>

                  <Switch>
                        <Route path="/store-locator">
                              <Store />
                        </Route>
                        
                        <Route path="/">
                              <Home />
                        </Route>
                  </Switch>
            </Router>
            

            {/* <Home/> */}
            


      
      <FooterBanner/>
      <Footer/>
    </div>
  );
}

export default App;
