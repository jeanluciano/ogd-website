import React from "react"
import styled from "styled-components"

const FooterBar = styled.footer`
  background-color: aliceblue;
  width: 13.3%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* margin-right: 6.66%; */
  z-index: 1;
  align-items: center;
`

export default function Stripe() {
  return (
    <FooterBar>
      <div className="stripe-top">
        <h1>Omar Garcia</h1>
        <h2>Photographer</h2>
      </div>
      <div className="stripe-bottom">
        <p>Based out of the greater Chicago area</p>
        <a href="tel:+17089642703">(708) 964-7203</a>
      </div>
    </FooterBar>
  )
}
