import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Trend = () => {
  const { data: blogs } = useFetch("/api/trending");
  return (
    <div className="widget widget-trending-posts">
      <h3 className="widget-title">Trending</h3>
      <div className="wd-posts">
        {blogs &&
          blogs.map((blog) => (
            <div className="wd-post" key={blog.id}>
              <img
                src={"http://127.0.0.1:8000/storage/" + blog.featured_image}
                alt=""
              />
              <div className="wd-post-info">
                <h3 className="post-title">
                  <Link to={"/blog/" + blog.slug} title="">
                    {blog.title}
                  </Link>
                </h3>
                <span className="post-date">{blog.created_at}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trend;
