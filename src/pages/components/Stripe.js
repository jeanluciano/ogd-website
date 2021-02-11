import React from "react"
import styled from "styled-components"

const FooterBar = styled.footer`
  background-color: #FFFFFF;
  min-width: 13.3vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: ${prop=> prop.home ? '6.66vw' :'0'  };
  z-index: 1;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: row;
    height: 20vh;
    width: 100vw;
  }
`
const FooterTop = styled.div`
	text-align:center;
	margin-top: 10vh;
  font-family: 'Raleway', sans-serif;
  h1 {
	font-weight: 800;
	font-size: 1.5rem;
}
@media (max-width: 425px) {
    margin: 0;
  }

`
const FooterBottom = styled.div`
  transform: rotate(-90deg);
	margin-bottom:18vh ;
  font-family: 'Assistant', sans-serif;
  font-weight:lighter;
  text-decoration: none;
  
  a {
    text-decoration:none;
    color:#1a1a1a;
  }
  @media (max-width: 425px) {
    transform:rotate(0);
    margin-bottom:0;
  }
`

export default function Stripe(props) {

  return (
    <FooterBar home={props.path=== '/' ? true : false}>
      <FooterTop>
        <h1>OMAR GARCIA</h1>
        <h2>PHOTOGRAPHER</h2>
      </FooterTop>
      <FooterBottom>
        <p>Based out of the greater Chicago area</p>
        <a href="tel:+17089642703">(708) 964-7203</a>
      </FooterBottom>
    </FooterBar>
  )
}
