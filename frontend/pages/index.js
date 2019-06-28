import About from "../components/About";
import styled from "styled-components";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Nav from "../components/Nav";

const StyledHome = styled.div`
  @media (max-width: 768px) {
    img {
      height: 400px;
    }
  }
`;

const HomePage = () => (
  <StyledHome>
    <Nav />
    <Home />
    <About />
    <Contact />
  </StyledHome>
);

export default HomePage;
