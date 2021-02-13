import React, { useEffect, useState } from "react"
import Layout from "./components/layout"
import Stripe from "./components/Stripe"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const MainPicture = styled(props => <BackgroundImage {...props} />)`
  width: 100%;
  height: 100vh;
  background-color: #c1ab8b;
  position: relative;
  box-sizing: content-box;
  z-index: 0;
`
const Control = styled.div`
  background-color: black;
  height: 13vh;
  width: 53vw;
  position: absolute;
  top: 40%;
  right: 0;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}){
    top: 60%;
  }
`

const SideStripe = styled.div`
  width: 6.66vw;
  height: 100vh;
  background-color: #c1ab8b;
  position: absolute;
  @media (max-width: 500px) {
    display:none;
    
  }
`
const ArrowContainer = styled.div`
  height: 100%;
  width: 6vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  position: relative;
`

const Arrow = styled.div`
  width: 2.5vmin;
  height: 2.5vmin;
  box-sizing: border-box;
  transform: ${prop => (prop.left ? "rotate(-135deg)" : "rotate(45deg)")};
  position: relative;
  margin-left: ${prop => (prop.left ? "10px" : 0)};
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    border-width: 0.8vmin 0.8vmin 0 0;
    border-style: solid;
    border-color: #fafafa;
    transition: 0.2s ease;
    display: block;
    transform-origin: 100% 0;
  }
  &:after {
    content: "";
    float: left;
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    border-width: 0 0.8vmin 0 0;
    border-style: solid;
    border-color: #fafafa;
    transform-origin: 100% 0;
    transition: 0.2s ease;
  }
  &:hover::before {
    border-color: #c1ab8b;
    transform: scale(0.9);
  }
  &:hover::after {
    transform: rotate(45deg) translateX(-1px);
    border-color: #c1ab8b;
    height: 120%;
  }
`

export default function Home(props) {
  const data = useStaticQuery(query)
  const [index, setIndex] = useState(0)
  const [physicalScreenWidth, setphysicalScreenWidth] = useState(0)
  const splashPictures = data.allStrapiImages.edges.filter(node => {
    return node.node.homePic
  })
 
  useEffect(()=>{
   setphysicalScreenWidth(window.screen.width * window.devicePixelRatio) 
  },[])
  const clickHanle = () =>{
  
    if (index === splashPictures.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prevclickHanle = () => {
    if (index === 0) {
      setIndex(splashPictures.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <>
    <MainPicture fluid={splashPictures[index].node.url.childImageSharp.fluid}>
      <SideStripe />
      <Layout path={props.location.pathname}>
        <Control>
          <Hr />
          <MainTitle>{splashPictures[index].node.title}</MainTitle>
          <ArrowContainer>
            <Arrow onClick={clickHanle} />
            <Arrow left onClick={prevclickHanle} />
          </ArrowContainer>
        </Control>
      </Layout>
    </MainPicture>
    {physicalScreenWidth < 770 ? <Stripe path={props.location.pathname} /> :'' }
    </>
  )
}
const MainTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
`

const Hr = styled.hr`
  width: 3vw;
  margin-left: 0;
  background-color: #c1ab8b;
  height: 5px;
  border: none;
  margin: none;
  position: absolute;
  top: 1vh;
  left: -1.5vw;
`

const query = graphql`
  query home {
    allStrapiImages {
      edges {
        node {
          title
          id
          featured
          homePic
          url {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
