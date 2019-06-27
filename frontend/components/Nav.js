import { Link } from "react-scroll";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";
import Contact from "./Contact";

const Nav = () => (
  <User>
    {({ data: { me } }) => {
      return (
        <NavStyles>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          {me && (
            <>
              <Link href="/reservations">
                <a>Reservations</a>
              </Link>
              <Signout />
            </>
          )}
          {!me && (
            <Link href="/signup">
              <a>Signin</a>
            </Link>
          )}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
