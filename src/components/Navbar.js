import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="top-bar">
            <div className="menu-btn">
              <a href="/" title="">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </a>
            </div>
            {/* menu-btn end */}
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            {/* <!--navigation end--> */}
            <div className="rt-subs">
              <a className="subscribe-btn" href="/" title="">
                <i className="la la-envelope-o"></i> Subscribe
              </a>
              <a className="search-btn" href="/" title="">
                <i className="la la-search"></i>
              </a>
            </div>
            {/* <!--rt-subs end--> */}
            <div className="clearfix"></div>
          </div>
          <div className="bottom-header">
            <div className="container">
              <div className="logo">
                <h2>
                  <Link to="/">Heeney</Link>
                </h2>
              </div>
              {/* <!-- logo end--> */}
            </div>
          </div>
          {/* <!--bottom-header end--> */}
        </div>
      </header>
      {/* // <!--HEADER END--> */}
      <div className="side-menu">
        <a href="/" title="" className="close-sidemenu">
          <i className="la la-close"></i>
        </a>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <!--navigation end--> */}
        <div className="logo">
          <h2>
            <Link to="/">Heeney</Link>
          </h2>
        </div>
        {/* <!-- logo end--> */}
      </div>
      {/* // <!--side-menu end--> */}
    </div>
  );
};

export default Navbar;
