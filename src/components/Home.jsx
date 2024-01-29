import { styled } from "styled-components"
import PageDivision from "./PageDivision";
import CardDeck from "./CardDeck";
import SocialMedia from "./SocialMedia";
// import BackgroundImage from "./BackgroundImage";

const Home = () => {
  return (
    <div>
      <WelcomeSection>
        <h1>Urban Pergola</h1>
        <ResponsiveBackgroundImage>
          <img className="blob" src='./images/Leherpausenhof1.jpeg' alt='blob image'></img>
        </ResponsiveBackgroundImage>
      </WelcomeSection>
      <PageDivision />
      <AboutUsSection>
        <div>
          <h1>About Us</h1>
          <p>In pursuit of enhancing the efficiency of the Urban Pergola hydroponic system, we are embarking on a project to experiment with a range of fertilizers. This initiative aligns seamlessly with Urban Pergola’s commitment to delivering sustainable, locally sourced produce. The primary objective of this project is to optimize the hydroponic mechanism, thereby maximizing the growth potential of plants within the system. By enhancing the efficacy of the fertilizers, we aim to not only elevate the overall performance of the
            hydroponic setup but also boost the yield of the cultivated crops.</p>
          <p>Our project addresses a challenge faced in the realm of hydroponics: the varied suitability of fertilizers for different types of produce. To tackle this issue, our project is designed to meticulously identify and confront these challenges head-on. Through a systematic process of experimentation and observation, we will closely examine the diverse effects that different fertilizers exert on crop growth. This comprehensive analysis will allow us to compare the fertilizers effectively and draw evidence-based conclusions. By employing statistical reasoning, we aim to establish a definitive baseline for the hydroponic mechanism moving forward.</p>
          <p>The success of this endeavor will usher in a new era of sustainable hydroponic farming for Urban Pergola. Not only will it ensure the consistent availability of high-quality, flavorful produce, but it will also pave the way for a more sustainable and efficient agricultural practice. Through our dedication to mitigating risks, identifying innovative solutions, and employing robust scientific methods, we are confident that this project will significantly enhance the hydroponic mechanism, benefiting our stakeholders and ensuring a seamless supply of delicious, fresh, and indistinguishable-from-soil produce to the local community.</p>
        </div>
      </AboutUsSection>
      <PageDivision />
      <OurTeamSection>
        <h1>Our Team</h1>
        <CardDeck />
      </OurTeamSection>
      <PageDivision />
      <ContactsSection>
        <h1>Let's work together...</h1>
        <p>How do you take your coffee?</p>
        <SocialMedia />
      </ContactsSection>
    </div >
  )
}

export default Home;

const ResponsiveBackgroundImage = styled.div`
  position: absolute;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  max-height: 80vh;
  object-fit: cover;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    height: 90vh;
  }

  .blob {
    display: block;
    margin: auto;
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* -webkit-mask-size: cover; */
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgxLjQyMiA1NC42NjE3IiB3aWR0aD0iMTAwJSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp2ZWN0b3JuYXRvcj0iaHR0cDovL3ZlY3Rvcm5hdG9yLmlvIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQxLjA0ODkgMjguNjIwNCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iTGluZWFyR3JhZGllbnQiIHgxPSI4Ljk1MTEiIHgyPSI5MC4zNzMxIiB5MT0iNzYuMDQxMyIgeTI9IjIxLjM3OTYiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmODc1MzciLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmJhODFmIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPGNsaXBQYXRoIGlkPSJBcnRib2FyZEZyYW1lIj4KPHJlY3QgaGVpZ2h0PSI1NC42NjE3IiB3aWR0aD0iODEuNDIyIiB4PSIwIiB5PSIwIi8+CjwvY2xpcFBhdGg+CjxnIGNsaXAtcGF0aD0idXJsKCNBcnRib2FyZEZyYW1lKSIgaWQ9IlVudGl0bGVkIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9IlVudGl0bGVkIj4KPHBhdGggZD0iTTU2LjA0ODkgMi41MjA0QzYwLjQ0ODkgNS4xMjA0IDYzLjc0ODkgOS4zMjA0IDY5LjI0ODkgMTQuMDIwNEM3NC42NDg5IDE4LjYyMDQgODIuMjQ4OSAyMy42MjA0IDgxLjM0ODkgMjguMTIwNEM4MC40NDg5IDMyLjUyMDQgNzAuOTQ4OSAzNi41MjA0IDY1Ljg0ODkgNDEuODIwNEM2MC43NDg5IDQ3LjAyMDQgNjAuMDQ4OSA1My43MjA0IDU2LjY0ODkgNTMuOTIwNEM1My4yNDg5IDU0LjIyMDQgNDcuMTQ4OSA0OC4wMjA0IDQxLjM0ODkgNDcuNjIwNEMzNS40NDg5IDQ3LjEyMDQgMjkuODQ4OSA1Mi40MjA0IDIzLjE0ODkgNTQuMTIwNEMxNi41NDg5IDU1LjcyMDQgOC44NDg5IDUzLjcyMDQgNC40NDg5IDQ4LjgyMDRDMC4wNDg5IDQ0LjAyMDQtMC45NTExIDM2LjMyMDQgMC44NDg5IDI5LjYyMDRDMi42NDg5IDIzLjAyMDQgNy4yNDg5IDE3LjQyMDQgMTMuMjQ4OSAxNS40MjA0QzE5LjM0ODkgMTMuNDIwNCAyNi43NDg5IDE1LjEyMDQgMzEuNjQ4OSAxMi44MjA0QzM2LjU0ODkgMTAuNTIwNCAzOC43NDg5IDQuMjIwNCA0Mi41NDg5IDEuNTIwNEM0Ni4zNDg5LTEuMDc5NiA1MS43NDg5LTAuMDc5NiA1Ni4wNDg5IDIuNTIwNFoiIGZpbGw9InVybCgjTGluZWFyR3JhZGllbnQpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJwYXRoIi8+CjwvZz4KPC9zdmc+Cg==);
  }
  
`;

const BackgroundImage1 = styled.div`
  position: absolute;
  background-position: top;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const BackgroundImage2 = styled.div`
  position: absolute;
  background-position: top;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.7)),
          url("/images/Team_UrbanPergola.jpeg");
`;

const WelcomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px);
  height: 100%;
  width: 100%;

  h1 {
    font-family: Georgia (serif);
    -webkit-text-stroke: 2px #243c2c;
    color: white;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 1em;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  `;

const AboutUsSection = styled.section`
  min-height: calc(100vh - 70px);
  height: 100%;
  width: 100%;
  text-align: left; 
  display: flex;
  align-items: center;
  justify-content: center;
  /* @media (max-width: 768px) {
    height: 100%;
  } */
  h1 {
    margin-top: 2rem;
    font-size: 2.5rem;
    text-align: center;
  }
  div {
    line-height: 1.6;
    padding: 0vh 5vh 0vh;
    max-width: 800px;
    text-align: justify;
  }
  p {
    margin-bottom: 30px;
  }
  `;

const OurTeamSection = styled.section`
  min-height: calc(100vh - 70px);
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  color: black;
  padding: 30px 0px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
  }
  `;

const ContactsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 180px);
  width: 100%;
  background-color: #f9f9f9;
  text-align: center;

  h1 {
    font-size: 4rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  p {
    font-style: italic;
    font-size: 1.5rem;
    padding: 30px 0px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
