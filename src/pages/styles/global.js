import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'
export const theme = {
  primaryDark: "#1a1a1a",
  primaryLight: "#FFFFFF",
  primaryHover: "#343078",
  mobile: "576px",
}

export const GlobalStyle = createGlobalStyle`
    ${reset}
    

`
