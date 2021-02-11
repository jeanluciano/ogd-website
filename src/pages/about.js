import React from "react"
import Layout from "./components/layout"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
const SideContent = styled(props => <BackgroundImage {...props} />)`
  min-width: 26.6vw;
  height: 100vh;
  background-color: #1a1a1a;
  position: relative;
  margin-right: 6.6vw;
  p {
    color: #c1ab8b;
    position: absolute;
    bottom: 10vh;
    left: 10%;
  }
  @media (max-width: 425px) {
    width: 100vw;
    height: 26vh;
    flex-direction:row;
    h2 {
      display:none;
    }
  }
`

const MainContent = styled.div`
  flex: 1;
  height: 100vh;
  overflow: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 6.6vw;
  @media (max-width: 425px) {
    width: 100vw;
    flex-direction:column;
    p {
      margin: 25px 20px;
    }
    h2 {
      margin: 25px 10px;
    }
  }
`


const SideTitle = styled.h2`
  font-size: 3rem;
  color: #ffffff;
  margin-top: 10vh;
  margin-left: 10%;
  
`
const MainText = styled.p`
  
  font-size:1.2rem;
  word-spacing:.4rem;
  line-height:1.4rem;
`
const MainTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-top: 10vh;
  
`

const About = props => {
  const data = useStaticQuery(query)

  console.log()
  return (
    <Layout path={props.location.pathname}>
    
        <SideContent fluid={data.strapiAboutImage.image.childImageSharp.fluid}>
          <SideTitle>About</SideTitle>
        </SideContent>
        <MainContent>
          <MainTitle>
            {
              "Bro ipsum dolor sit amet derailleur brain bucket taco mitt titanium, clean afterbang misty. Sucker hole corn bomb hole flow."
            }
          </MainTitle>
          <MainText>{mockText}</MainText>
        </MainContent>
    
    </Layout>
  )
}
const query = graphql`
  query about {
    strapiAboutImage {
      image {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const mockText = `Fully T-bar deck poaching backside grab gapers huckfest 360 couloir daffy. Core shot taco mitt huckfest stoked, face shots couloir dust on crust daffy first tracks wheelie drop hardtail titanium grind. T-bar shred ollie phat chain suck. Single track gondy hellflip face plant McTwist hot dogging.

BB grunt dust on crust ski bum park, drop hot dogging smear. Rock-ectomy frontside shuttle lid dust on crust, ripper poaching trail swag. Schwag bro corn, grind taco mitt gapers huck manny. Frozen chicken heads gapers titanium flowy avie. Euro shuttle stoked, schraeder trucks grind brain bucket gorby.`
export default About
