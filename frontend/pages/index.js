import About from "../components/About";
import styled from "styled-components";
import Contact from "../components/Contact";
import Home from "../components/Home";

const StyledHome = styled.div`
  @media (max-width: 768px) {
    img {
      height: 400px;
    }
  }
`;

const HomePage = () => (
  <StyledHome>
    <Home />
    <About />
    <Contact />
  </StyledHome>
);

export default HomePage;
