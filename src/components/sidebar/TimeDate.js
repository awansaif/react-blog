import Moment from "react-moment";
import "../../assets/style/TimeDate.css";
const TimeDate = () => {
  return (
    <div className="time-date">
      <h4>
        <Moment format="hh:mm:ss A" interval={1000} local />
      </h4>
      <span>
        <Moment format="dddd D MMMM, YYYY" local></Moment>
      </span>
    </div>
  );
};

export default TimeDate;
