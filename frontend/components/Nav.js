import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";

const Nav = () => (
  <User>
    {({ data }) => {
      console.log("this is the data: ", data);
      return (
        <NavStyles>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          {/* {me && (
            <>
              <Link href="/reservation">
                <a>Reservations</a>
              </Link>
              <Signout />
            </>
          )}
          {!me && (
            <Link href="/signup">
              <a>Signin</a>
            </Link>
          )} */}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
