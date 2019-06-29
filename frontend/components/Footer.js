import React from "react";
import styled from "styled-components";

const FooterLinks = [
  {
    name: "Facebook",
    link: "/",
    color: "#0F4CA7"
  },
  {
    name: "Instagram",
    link: "/",
    color: "#D46A6A"
  },
  {
    name: "Twitter",
    link: "/",
    color: "#749FDE"
  }
];

const FooterWrapper = styled.footer`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h3 {
    margin: 0.3rem;
    padding-top: 1rem;
  }
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  text-align: center;
  background: ${props => props.theme.dark};
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const SocialLink = styled.a`
  padding: 3px 5px;
  border-radius: 3px;
  color: black;
  text-decoration: none;
  font-size: 22px;
  margin: 0.5rem;
  background-color: ${props => props.color};
  :hover {
    color: white;
    cursor: pointer;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <SocialLinks>
      {FooterLinks.map(link => (
        <li key={link.name}>
          <SocialLink
            // href={link.link}
            color={link.color}
            target="_blank"
            rel="nofollow"
          >
            {link.name}
          </SocialLink>
        </li>
      ))}
    </SocialLinks>
  </FooterWrapper>
);

export default Footer;
