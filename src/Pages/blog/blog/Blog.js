import { useParams } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import useFetch from "../../../hooks/useFetch";
import Comments from "./comment/Comments";
import Content from "./Content";
import Footer from "./Footer";

const Blog = () => {
  const { slug } = useParams();

  const {
    data: blog,
    loading,
    error,
    message,
  } = useFetch("/api/blogs/" + slug);
  return (
    <section className="main-content p-80">
      <div className="container">
        {loading && <div className="loader"></div>}
        {error && <h2>{error.message}</h2>}
        {message && <h2>{message}</h2>}
        {blog && (
          <div className="row">
            <div className="col-lg-8 mr-50">
              <div className="single-page-content">
                <div className="standard-post">
                  <div className="blog-item">
                    <Content blog={blog} />
                    <Footer next={blog.next} prev={blog.previous} />
                  </div>
                </div>
                <Comments slug={blog.blog.slug} />
              </div>
            </div>

            <Sidebar />
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
