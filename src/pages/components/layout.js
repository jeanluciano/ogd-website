import React from "react"
import Header from "./Header"
import Stripe from "./Stripe"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from '../../styles/global'
const AppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.home ? "none" : "#ffffff")};
  position: relative;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`

const Content = styled.div`
  font-family: "Assistant", sans-serif;
  width: 100%;
  display:flex;
  @media (max-width: 425px) {
    flex-direction:column;
  }
`


const layout = props => {
  const {path, children} = props
  const physicalScreenWidth = window.screen.width * window.devicePixelRatio;
  const homeAndMobile = ((physicalScreenWidth > 780) || (path !=='/'))

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <AppContainer home={path === "/" ? true : false}>
      <Header path={path} />
      <Content>{children}</Content>
      { homeAndMobile ? <Stripe path={path} /> :'' }
    </AppContainer>
   </ThemeProvider>
    
  )
}
export default layout
