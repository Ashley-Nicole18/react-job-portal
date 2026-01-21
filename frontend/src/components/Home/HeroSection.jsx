import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import PropTypes from "prop-types";

const defaultDetails = [
  { id: 1, title: "1,233,641", subTitle: "Live Job", icon: <FaSuitcase /> },
  { id: 2, title: "91,220", subTitle: "Companies", icon: <FaBuilding /> },
  { id: 3, title: "2,345,200", subTitle: "Job Seekers", icon: <FaUsers /> },
  { id: 4, title: "1,503,761", subTitle: "Employers", icon: <FaUserPlus /> },
];

const HeroSection = ({
  details = defaultDetails,
  headingPart1 = "Find a job that suits",
  headingPart2 = "your interests and skills",
  description = "Discover job opportunities that match your skills and passions. Connect with employers seeking talent like yours for rewarding careers.",
}) => {
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>{headingPart1}</h1>
            <h1>{headingPart2}</h1>
            <p>{description}</p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

HeroSection.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ),
  headingPart1: PropTypes.string,
  headingPart2: PropTypes.string,
  description: PropTypes.string,
};

export default HeroSection;