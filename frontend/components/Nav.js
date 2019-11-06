import Router from "next/router";
import { Link } from "react-scroll";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";

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
              <div>
                <a onClick={() => Router.push("/reservations")}>Reservations</a>
              </div>
              <Signout />
            </>
          )}
          {!me && (
            <div>
              <a onClick={() => Router.push("/signup")}>Sign In</a>
            </div>
          )}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
