import Blogs from "./Blogs";
import Featured from "./Featured";
import Latest from "./Latest";
import Recommended from "./Recommended";
const Home = () => {
  return (
    <div>
      <Latest />

      <Featured />

      <Blogs />

      <Recommended />
    </div>
  );
};

export default Home;
