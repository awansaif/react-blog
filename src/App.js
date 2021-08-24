import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Blog from "./pages/SingleBlog";
import Category from "./pages/SingleCategory";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  return (
    <Router>
      <div className="App">
        <Preloader />
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/blog/:slug" component={Blog} />
          <Route exact path="/category/:slug" component={Category} />
        </Switch>

        <Footer />
        <Search />
      </div>
    </Router>
  );
}

export default App;
