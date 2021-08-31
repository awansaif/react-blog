import Category from "./Category";
import Subscribe from "./Subscribe";
import TimeDate from "./TimeDate";
import Trend from "./Trending";
import Weather from "./Weather";

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <TimeDate />

        <Weather />

        <Trend />

        <Subscribe />

        <Category />

        <div className="widget widget-fb">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTharkiUstad%2F&tabs=like&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="340"
            height="130"
            scrolling="no"
            title="dadds"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      {/* <!--sidebar end--> */}
    </div>
  );
};

export default Sidebar;
