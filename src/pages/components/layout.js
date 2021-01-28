import React from "react"
import Header from "./Header"
import Stripe from "./Stripe"
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #c2ab8b;
`

const Content = styled.div`

width:100%;
`

const layout = props => {
  return (
    <AppContainer>
      <Header />
      <Content>{props.children}</Content>
      <Stripe />
    </AppContainer>
  )
}
export default layout
