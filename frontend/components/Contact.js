import styled from "styled-components";
import { Link } from "react-scroll";

const StyledContact = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  h1 {
    text-align: center;
  }
  .topPart {
    position: relative;
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
  .scrollTop {
    position: absolute;
    top: 160px;
    right: 1rem;
    font-size: 20px;
    a:hover {
      color: white;
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
        <span className="scrollTop">
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            back to top ⇧
          </Link>
        </span>
      </div>
    </StyledContact>
  );
};

export default Contact;
