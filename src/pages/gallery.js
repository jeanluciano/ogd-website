import React from "react"
import Layout from "./components/layout"
import styled from "styled-components"

const GalleryContainer = styled.div`
  display: flex;
`
const FeaturedPicture = styled.div`
  min-width: 26.6vw;
  height: 100vh;
  background-color: #282828;
`

const Pictures = styled.div`
 
  height: 100vh;
  overflow: auto;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right:6.6vw;
  
`

const PictureCard = styled.div`
  min-width: 13.3vw;
  max-width: 13.3vw;
  min-height: 30vh;
  background-color: #c2ab8b;
  margin-left: 6.6vw;
  margin-bottom:10vh;
 
`
const Gallery = () => {
  return (
    <Layout>
      <GalleryContainer>
        <FeaturedPicture />
        <Pictures>
          <PictureCard />
          <PictureCard />
          <PictureCard />
          <PictureCard />
          <PictureCard />
          <PictureCard />
          <PictureCard />
        </Pictures>
      </GalleryContainer>
    </Layout>
  )
}

export default Gallery
