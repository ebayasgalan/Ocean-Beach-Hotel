import styled from "styled-components";

const CoolButton = styled.button`
  background: purple;
  color: white;
  font-weight: 300;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.6rem 1.2rem;
  transform: skew(-2deg);
  display: inline-block;
  transition: all 0.4s;
  &[disabled] {
    opacity: 0.4;
  }
`;

export default CoolButton;
