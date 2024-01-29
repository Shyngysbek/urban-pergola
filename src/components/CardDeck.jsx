import { styled } from "styled-components"

const CardDeck = () => {
  return (
    <CardDisplay>
          <Card>
            <img src="./images/Lina.jpeg" alt="Lina" />
            <Container>
              <h2>Lina Becker</h2>
              <p className="title">Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>sample@example.com</p>
              <a className="button" href="https://www.linkedin.com/in/lina-becker-b17296256/" target="_blank">Contact</a>
            </Container>
          </Card>
          <Card>
            <img src="./images/Marcel.jpeg" alt="Lina" />
            <Container>
              <h2>Marcel Conrad</h2>
              <p className="title">Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>sample@example.com</p>
              <a className="button" href="https://www.linkedin.com/in/marcel-conrad-989928200/" target="_blank">Contact</a>
            </Container>
          </Card>
          <Card>
            <img src="./images/Julian.jpeg" alt="Lina" />
            <Container>
              <h2>Julian Schöne</h2>
              <p className="title">Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>sample@example.com</p>
              <a className="button" href="https://www.linkedin.com/in/julian-schöne-43809819a/" target="_blank">Contact</a>
            </Container>
          </Card>
          <Card>
            <img src="./images/Sylvan.jpeg" alt="Lina" />
            <Container>
              <h2>Sylvan Rentel</h2>
              <p className="title">Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>sample@example.com</p>
              <a className="button" href="https://www.linkedin.com/search/results/people/?keywords=Sylvan%20Rentel&origin=SWITCH_SEARCH_VERTICAL&sid=28O" target="_blank">Contact</a>
            </Container>
          </Card>
          {/* <EmptyCards></EmptyCards> */}
          {/* <EmptyCards></EmptyCards> */}
        </CardDisplay>
  )
}

export default CardDeck;


const EmptyCards = styled.div`
  margin: 15px 8px;
  width: 270px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ghostwhite;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 15px 8px;
  width: 270px;
  border: 2px transparent solid;
  border-radius: 5%;
  position: static;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

const Container = styled.div`
  padding: 10px 16px;
  margin-bottom: 16px;

  .title {
    color: grey;
    font-weight: bold;
  }
  p {
    padding: 10px 0px;
  }
  a{
    display: block;
    background-color: black;
    color: white;
    text-decoration: None;
    width: 100%;
    text-align: center;
    padding: 7px 0px;

    &:hover{
      cursor: pointer;
      opacity: 0.6;
    }
  }
 `;

const CardDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0px;
  
  /* &::after {
    content: "";
    width: 520px
  } */
 `;