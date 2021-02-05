import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Header(props) {
  const { path } = props
  return (
    <Navbar home={path === "/" ? true : false}>
      <AniLink swipe direction={"down"} to="/">
        <StyledLogo />
      </AniLink>

      <NavLinks>
        <StyledLink
          swipe
          direction={"up"}
          to="/contact"
          className={` ${path === "/contact" ? "active" : ""}`}
        >
          contact
        </StyledLink>
        <StyledLink
          swipe
          to="/about"
          direction={path === "/gallery" ? "up" : "down"}
          className={` ${path === "/about" ? "active" : ""}`}
        >
          about
        </StyledLink>
        <StyledLink
          swipe
          to="/gallery"
          className={` ${path === "/gallery" ? "active" : ""}`}
          direction={path === "/" ? "up" : "down"}
        >
          gallery
        </StyledLink>
      </NavLinks>
    </Navbar>
  )
}
const Navbar = styled.div`
  background-color: #ffffff;
  width: 6vw;
  height: 100vh;
  display: flex;
  padding-right: ${prop => (prop.home ? "0" : "6.66vw")};
  margin-left: ${prop => (prop.home ? "13.3vw" : "0")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-family: "Raleway", sans-serif;
  a {
    margin-top: 10vh;
    width: 80%;
  }
`
const StyledLogo = styled(props => <Logo {...props} />)``
const NavLinks = styled.nav`
  transform: rotate(-90deg);
  margin: 20vh 0%;
`
const StyledLink = styled(props => <AniLink {...props} />)`
  text-decoration: none;
  color: #1a1a1a;
  margin: 5%;
  font-size: 1.5rem;
  width: 25%;
  position: relative;
  z-index: 1;

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 0.5rem;
    bottom: -20%;
    left: 50%;
    position: absolute;
    background: #c1ab8b;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    z-index: -1;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }

  &.active:after {
    width: 100%;
    left: 0;
  }
`
