import { styled } from "styled-components"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <SocialIcons>
      <div className="social-icons">
        <a href="https://www.instagram.com/_urbanpergola_/" target="_blank">
          <FaInstagram className="icon"/>
        </a>
        <a href="https://www.linkedin.com/company/urban-pergola/about/" target="_blank">
          <FaLinkedinIn className="icon" />
        </a>
        <a href="https://www.facebook.com/p/Urban-Pergola-100064927142693/" target="_blank">
          <FaFacebookF className="icon" />
        </a>
      </div>
    </SocialIcons>
  )
}

export default SocialMedia;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 3rem;
  
  a {
    padding: 0px 30px;
    @media (max-width: 768px) {
      padding: 0px 20px;
    }
  }

  .icon {
    color: black;

    &:hover {
      color: white;
      background-color: black;
      border: 0px transparent solid;
      border-radius: 20%;
    }
  }
`;
