import React, { useState } from "react"
import styled from "styled-components"
import Logo from "./logo"
import Burger from "./Burger"
import Menu from "./Menu"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Header(props) {
  const { path } = props
  const [open, setOpen] = useState(false)
  return (
    <Navbar home={path === "/" ? true : false}>
      <AniLink swipe direction={"down"} to="/">
        <StyledLogo />
      </AniLink>
      <Burger open={open} setOpen={setOpen} />
      <MobileTitle>{path}</MobileTitle>
      
      <NavLinks open={open} home={path === "/"}>
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
        <StyledLink
          swipe
          direction={"down"}
          to="/"
          className={` ${path === "/" ? "active" : ""}`}
        >
          home
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
    width: 3rem;
    height: auto;
  }
  @media (max-width: 425px) {
    width: 0;
    height: 0;
    flex-direction: row;
    margin-left: 0;
    padding-left: 0;
  }
`
const StyledLogo = styled(props => <Logo {...props} />)``
const NavLinks = styled.nav`
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);

  margin: 12vh 0;
  width: 60vh;

  position: absolute;
  top: 50%;
  left: ${prop => (prop.home ? "50%" : "20%")};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: rotate(0);
    margin: 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${props => (props.open ? "translateX(0)" : "translateX(-100%)")};
    width: 100vw;
    z-index: 6;
  }
`
const MobileTitle = styled.h1`
  font-size: 1.4rem;
  color: #ffffff;
  margin: 10%;
  position: absolute;
  top: 0.4rem;
  left: 3.5rem;
  z-index: 10;
  margin: 15px;
  @media (min-width: 700px){
    display:none;
  }
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
