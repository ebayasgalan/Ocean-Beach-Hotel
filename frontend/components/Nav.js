import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/">
      <a>Reservations</a>
    </Link>
    <Link href="/contact">
      <a>Contact Us</a>
    </Link>
  </NavStyles>
);

export default Nav;
