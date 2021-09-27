import { Link } from "react-router-dom";

const Footer = ({ next, prev }) => {
  return (
    <div className="post-control">
      <ul>
        <li className="prev-p">
          {prev && prev != null ? (
            <Link to={"/blog/" + prev.slug} title={prev.title}>
              <i className="fa fa-angle-left"></i>
              {prev && prev.title}
            </Link>
          ) : (
            ""
          )}
        </li>
        <li className="next-p">
          {next && next != null ? (
            <Link to={"/blog/" + next.slug} title={next.title}>
              <i className="fa fa-angle-right"></i>
              {next.title}
            </Link>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
