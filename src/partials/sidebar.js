import { Link } from 'react-router-dom';
const Sidebar = () => {
    
    return (
        <div className="side-menu">
			<a href title="" className="close-sidemenu">
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
        // <!--side-menu end-->
    );
}


export default Sidebar;