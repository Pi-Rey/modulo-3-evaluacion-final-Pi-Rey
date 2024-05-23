import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import headerImg from "../images/header_image.png";

function Header({ reset }) {
  //TODO: meter un texto para saber que si pincho me lelva al inicio
  return (
    <header className="header">
      <Link to="/" onClick={reset}>
        <img className="header--img" src={headerImg} alt="" />
      </Link>
    </header>
  );
}

Header.propTypes = {
  reset: PropTypes.func,
};

export default Header;
