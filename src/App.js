import './App.css';
import Home from './Pages/Home';
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import Sidebar from './partials/sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return ( 
    <Router>
    <div className="wrapper">
        {/* navbar */}
        <Navbar />

        {/* sidebar */}
        <Sidebar />

        {/* content */}
         <Switch>
           {/* about page */}
          <Route path="/about">
            <About />
          </Route>
          {/* contact us page */}
          <Route path="/contact">
            <Contact />
          </Route>
          {/* Home */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        
        {/* footer */}
        <Footer />

        {/* search */}
        <div className="search-page">
          <form>
            <div className="container">
              <div className="form-field">
                <input type="text" name="search" placeholder="Enter Your Keywords" />
                <button type="submit"><i className="la la-search"></i></button>
              </div>
            </div>
          </form>
          <a href title="" className="close-search"><i className="la la-close"></i></a>
        </div>
        {/* <!--SEARCH PAGE END--> */}
    </div>
    </Router>
  );
}

export default App;
