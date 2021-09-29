import { Link } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import useFetch from "../../../hooks/useFetch";
import Blog from "./Blog";

const Blogs = () => {
  const { data: blogs, loading, error } = useFetch("/api/all");
  return (
    <section className="main-content pb-0">
      <div className="container">
        <div className="sec-title">
          <h3>Blogs </h3>
        </div>
        {loading && <div className="loader"></div>}
        {error && <h1>{error}</h1>}
        <div className="row">
          <div className="col-lg-8 mgr-50">
            <div className="blog-section">
              <div className="blog-items style2 sec-padding2">
                <div className="row">
                  {blogs?.map((blog, index) => (
                    <Blog blog={blog} key={index} />
                  ))}
                </div>
              </div>
            </div>

            {blogs?.length >= 10 && (
              <div className="heeney-pagination text-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <Link className="page-link" to="/blogs" tabindex="-1">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
