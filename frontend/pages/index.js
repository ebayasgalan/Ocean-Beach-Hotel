import About from "../components/About";
import styled from "styled-components";

const StyledHome = styled.div`
  @media (max-width: 768px) {
    img {
      height: 400px;
    }
  }
`;

const HomePage = () => (
  <StyledHome>
    <img
      src="/static/hotel.jpg"
      alt="hotel picture"
      height="650px"
      width="100%vh"
    />
    <About />
  </StyledHome>
);

export default HomePage;
