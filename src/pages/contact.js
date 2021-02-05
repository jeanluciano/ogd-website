import React from "react"
import Layout from "./components/layout"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const SideImage = styled(props => <BackgroundImage {...props} />)`
  width: 100%;
  height: 50vh;
  background-color: #1a1a1a;
  position: relative;
  margin-right: 6.6vw;
`
const FeaturedPicture = styled.div`
  min-width: 26.6vw;
  height: 100vh;
  background-color: #1a1a1a;
  position: relative;
  margin-right: 6.6vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: #c1ab8b;
    position: absolute;
    bottom: 10vh;
    left: 10%;
  }
`
const ContactLinks = styled.div`
  width: 13.3vw;
  color: #ffffff;
  margin-left:10%;
  display: flex;
  flex-direction:column;
  a {
    color: #ffffff;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    
    font-size: 1.5rem;
  }

  span {
    margin: 0 3.3vw;
  }
`
const MainContent = styled.div`
  flex: 1;
  height: 100vh;
  overflow: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  padding-right: 6.6vw;
`
const MainTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-top: 10vh;
`
const SideTitle = styled.h2`
  font-size: 3rem;
  color: #ffffff;
  margin-top: 10vh;
  margin-left: 10%;
`

const GalleryContainer = styled.div`
  display: flex;
`

const Form = styled.form`
  width: 100%;
  margin: 13.3vh 0;
  label {
    display: block;
  }
  div {
    width: 100%;
  }
  button {
    background-color: #1a1a1a;
    border: none;
    color: #ffffff;
    width: 33%;
    height: 3.3vh;
  }
`
const Input = styled.input`
  width: 100%;
  height: 3.3vh;
  border: 2px solid #1a1a1a;
  margin: 1.5vh 0;
  outline: none;
  &:focus {
    border: 2px solid #c1ab8b;
  }
`
const TextArea = styled.textarea`
  width: 100%;
  height: 20vh;
  border: 2px solid #1a1a1a;
  margin: 1.5vh 0;
  resize: none;
  outline: none;
  &:focus {
    border: 2px solid #c1ab8b;
  }
`

const FormRow = styled.form`
  width: 100%;
  display: flex;
`
const Contact = props => {
  const data = useStaticQuery(query)

  return (
    <Layout path={props.location.pathname}>
      <GalleryContainer>
        <FeaturedPicture>
          <SideTitle>Contact</SideTitle>
          <ContactLinks>
            <a href="instagram.com">
              <FontAwesomeIcon icon={faInstagram} /> <span>@Ogd_ </span>
            </a>
            <a href="instagram.com">
              <FontAwesomeIcon icon={faTwitter} /> <span>@Ogd_ </span>
            </a>
          </ContactLinks>
          <SideImage
            fluid={data.strapiContactImage.image.childImageSharp.fluid}
          />
        </FeaturedPicture>
        <MainContent>
          <MainTitle>Send Me a Message</MainTitle>
          <Form>
            <FormRow>
              <div>
                <label>Email</label>
                <Input type="email" name="email" />
              </div>
              <div>
                <label>Name</label>
                <Input type="text" name="name" />
              </div>
            </FormRow>

            <label>Message</label>
            <TextArea big type="text" name="message" />
            <button>send</button>
          </Form>
        </MainContent>
      </GalleryContainer>
    </Layout>
  )
}

const query = graphql`
  query contact {
    strapiContactImage {
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
export default Contact
