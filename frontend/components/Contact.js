import styled from "styled-components";

const StyledContact = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  p {
    font-size: 24px;
  }
`;

const Contact = () => {
  return (
    <StyledContact>
      <span>
        <h2>Address:</h2>
        <p className="address">
          Ocean Beach Hotel <br />
          1096 Point Lobos Avenue <br />
          San Francisco, CA 94121
        </p>
      </span>
      <span>
        <h2>Phone:</h2>
        <p>(999)999-9999</p>
      </span>
      <span>
        <h2>Email:</h2>
        <p>info_hotel@test.com</p>
      </span>
    </StyledContact>
  );
};

export default Contact;
