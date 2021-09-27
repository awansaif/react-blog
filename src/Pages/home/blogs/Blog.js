import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="blog-item">
        <div className="blog-img">
          <img
            src={
              process.env.REACT_APP_API_STORAGE_URL + "/" + blog.featured_image
            }
            alt={blog.title}
            height="auto"
            width="100%"
          />
        </div>
        <div className="blog-info">
          <h3 className="post-title">
            <Link to={"/blog/" + blog.slug} title={blog.title}>
              {blog.title}
            </Link>
          </h3>
          <ul className="meta">
            <li>{blog.created_at}</li>
            <li title="views">
              <i className="la la-eye"></i>
              {blog.views}
            </li>
            <li title="comments">
              <i className="la la-comment-o"></i>
              {blog.comments_count}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
