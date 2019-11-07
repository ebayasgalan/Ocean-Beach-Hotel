import Link from "next/link";
import Signup from "../components/Signup";
import styled from "styled-components";
import Signin from "../components/Signin";

const StyledPage = styled.div`
  height: 100vh;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`;

const StyledNav = styled.div`
  text-align: center;
  a {
    align-content: center;
    font-size: 24px;
    :hover {
      cursor: pointer;
      color: white;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <Link href="/">
      <a>Back to Home</a>
    </Link>
  </StyledNav>
);

const SignupPage = props => (
  <StyledPage>
    <Nav />
    <Columns>
      <Signin />
      <Signup />
    </Columns>
  </StyledPage>
);

export default SignupPage;
