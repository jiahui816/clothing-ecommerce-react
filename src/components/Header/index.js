import "./styles.scss";
import Logo from "./../../assets/mylogo2.png";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <Link to="/registration">Register Now</Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
