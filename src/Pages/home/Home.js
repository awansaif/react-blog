import Blogs from "./blogs/Blogs";
import Featured from "./featured/Features";
import Latest from "./latest/Latests";
import Recommended from "./recommend/Recommended";
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
