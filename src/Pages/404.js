import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <h2>404 </h2>
      <p>
        Required Page not found <Link to="/">Go Back</Link>
      </p>
    </>
  );
};

export default NotFound;
