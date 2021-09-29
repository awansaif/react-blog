import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="top-bar">
            <div className="menu-btn">
              <p>
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </p>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="rt-subs">
              <Link className="subscribe-btn" to="/editors" title="">
                <i className="la la-pencil"></i> Editors
              </Link>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="bottom-header">
            <div className="container">
              <div className="logo">
                <h2>
                  <Link to="/">{process.env.REACT_APP_NAME}</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="side-menu">
        <p className="close-sidemenu">
          <i className="la la-close"></i>
        </p>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="logo">
          <h2>
            <Link to="/">{process.env.REACT_APP_NAME}</Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
