import Blogs from "./blogs/Blogs";
import Featured from "./featured/Features";
import Latest from "./latest/Latests";
import Recommended from "./recommend/Recommended";
const Home = () => {
  return (
    <>
      <Latest />

      <Featured />

      <Blogs />

      <Recommended />
    </>
  );
};

export default Home;
