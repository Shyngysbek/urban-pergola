import Footer from './Footer';
import Header from './Header'
import Home from './Home';
import { styled } from "styled-components"

function HomePage() {
  return (
    <div>
      <Header />
      <ResponsiveContainer>
          <Home />
      </ResponsiveContainer>
      <Footer />
    </div>
  )
}

export default HomePage

const ResponsiveContainer = styled.div`
  width: 100%;
  padding-top: 70px;
`;