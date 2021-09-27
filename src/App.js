import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/blog/Blog";
import Blogs from "./pages/blog/blogs/Blogs";
import CategoryBlog from "./pages/category/Blogs";
import Search from "./components/Search";
import Footer from "./components/Footer";
import ProfileContextProvider from "./context/ProfileContext";
import Editors from "./pages/editors/editor/Editors";
import EditorBlog from "./pages/editors/blogs/Blogs";
import NotFound from "./pages/404";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <ProfileContextProvider>
        <Navbar />

        <Switch>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/blog/:slug" component={Blog} />
          <Route exact path="/category/:slug" component={CategoryBlog} />

          <Route exact path="/editors" component={Editors} />
          <Route exact path="/editor/:slug" component={EditorBlog} />

          <Route exact path="/" component={Home} />

          <Route component={NotFound} />
        </Switch>

        <Footer />
        <Search />
      </ProfileContextProvider>
    </Router>
  );
}

export default App;
