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
  background-color: ${props => (props.home ? "none" : "#ffffff")};
  position: relative;
`

const Content = styled.div`
  font-family: "Assistant", sans-serif;
  width: 100%;
`

const layout = props => {
  console.log(props.path)
  return (
    <AppContainer home={props.path === "/" ? true : false}>
      <Header path={props.path} />
      <Content>{props.children}</Content>
      <Stripe path={props.path} />
    </AppContainer>
  )
}
export default layout
