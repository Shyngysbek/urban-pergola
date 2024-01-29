import { styled } from "styled-components"

const Footer = () => {
  return (
    <FooterSection>
      <Content>
        <Contacts>
          <p>Contacts:</p>
          <ul>
            <li>+XX XXX XXXXXXX</li>
            <li>urbanpergola@outlook.com</li>
            <li>Germany, Bremerhaven, Leherpausenhof</li>
          </ul>
        </Contacts>
        <Details>
          <p>Details:</p>
          <ul>
            <li>Industry Environmental Services</li>
            <li>Specialties Urban Greening</li>
            <li>Founded in 2020</li>
          </ul>
        </Details>
      </Content>
    </FooterSection>
  )
}

export default Footer;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  p, li {
    @media (max-width:700px) {
      font-size: 0.8em;
      width: auto;
    }
  }
`;
const FooterSection = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;;
  height: 110px;
  width: 100%;
  background-color: #f9f9f9;
  border-top: 2px #243c2c solid;
`;

const Contacts = styled.div`
  margin: 5px;
  padding-left: 15px;
  `;
const Details = styled.div`
  margin: 5px;
  padding-right: 15px;
`;