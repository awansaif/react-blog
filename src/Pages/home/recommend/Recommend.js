import { Link } from "react-router-dom";

const Recommend = ({ blog }) => {
  return (
    <div className="col-lg-6" key={blog.id}>
      <div className="blog-item">
        <div className="blog-img">
          <img
            src={
              process.env.REACT_APP_API_STORAGE_URL + "/" + blog.featured_image
            }
            alt=""
          />
        </div>
        <div className="blog-info">
          <Link
            to={"/category/" + blog.category.slug}
            title=""
            className="post-category"
          >
            {blog.category.title}
          </Link>
          <h3 className="post-title">
            <Link to={"/blog/" + blog.slug} title="">
              {blog.title}
            </Link>
          </h3>
          <ul className="meta">
            <li>{blog.created_at}</li>
            <li>
              <i className="la la-eye"></i>
              {blog.views}
            </li>
            <li>
              <i className="la la-comment-o"></i>
              {blog.comments_count}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
