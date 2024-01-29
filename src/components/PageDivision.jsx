import { styled } from "styled-components"

const PageDivision = () => {
  return(
    <div>
      <Box>
        <Line />
        <Dot />
        <Line />
      </Box>
    </div>
  )
};

export default PageDivision;

const Box = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0px;
`;

const Line = styled.div`
  position: relative;
  border: 3px solid #243c2c;
  width: 20vw;
  `;


const Dot = styled.div`
  position: relative;
  border: 7px solid #243c2c;
  border-radius: 50%;
`;