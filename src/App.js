import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Blog from "./pages/blog/show";
import Blogs from "./pages/blog/Blogs";
import Category from "./pages/SingleCategory";
import Search from "./components/Search";
import Footer from "./components/Footer";
import ProfileContextProvider from "./context/ProfileContext";
import Editors from "./pages/editor/List";
import EditorBlog from "./pages/editor/show";

function App() {
  return (
    <Router>
      <ProfileContextProvider>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/blog/:slug" component={Blog} />
            <Route exact path="/category/:slug" component={Category} />

            <Route exact path="/editors" component={Editors} />
            <Route exact path="/editor/:slug" component={EditorBlog} />
          </Switch>

          <Footer />
          <Search />
        </div>
      </ProfileContextProvider>
    </Router>
  );
}

export default App;
