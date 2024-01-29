import { styled } from "styled-components"

const BackgroundImage = () => {
  return (
    <BgImage></BgImage>
  )
}

export default BackgroundImage;

const BgImage = styled.img`
  position: absolute;
  background: linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.7)), 
          url();
        /* "/images/home-background.png" */
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  height: 100%;
  width: 100%;
  /* top: 0;
  left: 0;
  right: 0; */
  z-index: -1;
`;
