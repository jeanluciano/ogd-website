import React, { useEffect, useState } from "react"
import Layout from "./components/layout"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Lightbox from "react-image-lightbox"
import Img from "gatsby-image"
import "react-image-lightbox/style.css"

const FeaturedPicture = styled.div`
  min-width: 26.6vw;
  height: 100vh;
  background-color: #1a1a1a;
  position: relative;
  p {
    color: #c1ab8b;
    position: absolute;
    bottom: 8vh;
    left: 10%;
  }
  @media (max-width: 425px) {
    display: flex;
    width: 100vw;
    height: 32vh;
    flex-direction: row-reverse;
  }
`
const Hr = styled.hr`
  width: 25%;
  margin-left: 0;
  background-color: #c1ab8b;
  height: 5px;
  border: none;
  margin: none;
`
const Pictures = styled.div`
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
    max-width: 100vw;
  }
`
const FeaturedTitle = styled.h2`
  font-size: 3rem;
  color: #ffffff;
  margin: 10%;
  @media (max-width: 425px) {
    flex:1;
    font-size: 1.8rem;
    margin-top: 15%;
  }
`

const Title = styled.h3`
  margin: 10% 0%;
`
const PictureCard = styled.div`
  min-width: 13.3vw;
  width: 13.3vw;
  height: 350px;

  margin-left: 6.6vw;
  margin-bottom: 7vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2rem;
  @media (max-width: 425px) {
    width: 40vw;
  }
`
const StyledImage = styled(props => <Img {...props} />)`
  width: auto;
  height: 70%;
`
const StyledfImage = styled(props => <Img {...props} />)`
  width: auto;
  height: 50%;
  @media (max-width: 425px) {
    width: 50%;
    height: 100%;
  }
`

const GalleryPage = props => {
  const data = useStaticQuery(query)
  const indexedPictures = data.allStrapiImages.edges.map((node, idx) => {
    return { ...node, idx: idx }
  })
  const featuredPictures = indexedPictures.filter(node => node.node.featured)
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [featured, setFeatured] = useState(0)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (featured === featuredPictures.length - 1) {
        setFeatured(0)
      } else {
        setFeatured(featured + 1)
      }
    }, 10000)
    return () => clearTimeout(timeOut)
  })

  const prevIndex = index - (1 % indexedPictures.length)
  const nextIndex =
    (index + indexedPictures.length + 1) % indexedPictures.length
  const fullFeatured = featuredPictures[featured].node.url.childImageSharp.full

  const clickHanle = () => {
    indexedPictures.forEach(node => {
      if (fullFeatured.src === node.node.url.childImageSharp.full.src) {
        setIndex(node.idx)
        setIsOpen(true)
      }
    })
  }
  return (
    <Layout path={props.location.pathname}>
      <FeaturedPicture onClick={clickHanle}>
        <StyledfImage fluid={fullFeatured} />
        <FeaturedTitle>{featuredPictures[featured].node.title}</FeaturedTitle>
        <p>Featured work</p>
      </FeaturedPicture>
      <Pictures>
        {indexedPictures.map((node, idx) => {
          return (
            <PictureCard
              onClick={() => {
                setIsOpen(true)
                setIndex(idx)
              }}
            >
              <StyledImage
                fluid={node.node.url.childImageSharp.thumb}
              ></StyledImage>
              <Title>{node.node.title}</Title>
              <Hr />
            </PictureCard>
          )
        })}
      </Pictures>

      {isOpen && (
        <Lightbox
          mainSrc={indexedPictures[index].node.url.childImageSharp.full.src}
          nextSrc={
            indexedPictures[nextIndex]
              ? indexedPictures[nextIndex].node.url.childImageSharp.full.src
              : undefined
          }
          prevSrc={
            indexedPictures[prevIndex]
              ? indexedPictures[prevIndex].node.url.childImageSharp.full.src
              : undefined
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
          imageTitle={indexedPictures[index].node.title}
        />
      )}
    </Layout>
  )
}

const query = graphql`
  query MyQuery {
    allStrapiImages {
      edges {
        node {
          title
          id
          featured
          url {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default GalleryPage
