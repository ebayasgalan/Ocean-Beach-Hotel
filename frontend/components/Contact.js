import styled from "styled-components";

const StyledContact = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  h1 {
    text-align: center;
  }
  .topPart {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 2rem;
    padding: 1rem;
    text-align: center;
    p {
      font-size: 24px;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContact>
      <h1 className="contact">Contact Us</h1>
      <div className="topPart">
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

        <span className="email">
          <h2>Email:</h2>
          <p>reservations@oceanhotel.com</p>
        </span>
      </div>
    </StyledContact>
  );
};

export default Contact;
