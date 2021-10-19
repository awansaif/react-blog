import { Link } from "react-router-dom";

const Content = ({ blog }) => {
  return (
    <>
      <div className="blog-info">
        <ul className="meta">
          <li>
            <Link
              to={"/category/" + blog.blog.category.slug}
              title={blog.blog.category.title}
              className="post-category"
            >
              {blog.blog.category.title}
            </Link>
          </li>
          <li>{blog && blog.blog.created_at}</li>
          <li>
            <i className="la la-eye"></i>
            {blog.blog.views}
          </li>
          <li>
            <i className="la la-comment-o"></i>
            {blog.blog.comments_count}
          </li>
        </ul>
        <h3 className="post-title">{blog.blog.title}</h3>
      </div>
      <div className="blog-img">
        <img
          src={
            process.env.REACT_APP_API_STORAGE_URL +
            "/" +
            blog.blog.featured_image
          }
          alt=""
        />
      </div>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          all: "reset",
        }}
      >
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: blog.blog.body,
          }}
        />
      </div>
      <div className="post-catgs-links mt-5">
        <div className="clearfix"></div>
      </div>
      <div className="post-author-info">
        <div className="author-img" style={{ borderRadius: "50%" }}>
          <img
            src={
              process.env.REACT_APP_API_STORAGE_URL +
              "/" +
              blog.blog.editor.profile?.avatar_path
            }
            alt=""
          />
        </div>
        <div className="author-info">
          <h3>
            <Link to={"/editor/" + blog.blog.editor.id} title="">
              {blog.blog.editor.name}
            </Link>
          </h3>
          <p>{blog.blog.editor.profile?.about_me}</p>
          <ul className="social-links">
            <li>
              <a href={blog.blog.editor.profile?.website_link} title="">
                <i className="fas fa-website"></i>
                Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Content;
