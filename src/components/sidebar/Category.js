import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Catgory = () => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch("http://127.0.0.1:8000/api/categories");
  return (
    <div className="widget widget-catgs">
      <h3 className="widget-title">Categories</h3>
      <ul className="catgs-links">
        {loading && <li>Loading ....</li>}
        {error && <li>{error}</li>}
        {categories &&
          categories.map((category) => (
            <li key={category.slug}>
              <Link to={"/category/" + category.slug} title={category.title}>
                {category.title}
              </Link>
            </li>
          ))}
      </ul>
      {/* <!--catgs-links end--> */}
    </div>
  );
};

export default Catgory;
