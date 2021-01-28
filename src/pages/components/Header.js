import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"

const Navbar = styled.div`
  background-color: aliceblue;
  width: 6%;
  height: 100vh;
  display: flex;
  padding-left: 6.66%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const NavLinks = styled.nav`
  transform: rotate(-90deg);
  margin: 20% 0%;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: #282828;
  text-decoration: none;
  margin: 2% 10%;
  font-size: 1.5rem;
`

export default function Header() {
  return (
    <Navbar>
      <Logo />
      <NavLinks>
        <StyledLink to="/contact">contact</StyledLink>
        <StyledLink to="/about">about</StyledLink>
        <StyledLink to="/gallery">gallery</StyledLink>
      </NavLinks>
    </Navbar>
  )
}
