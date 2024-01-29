import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import styled from 'styled-components'
import FirstChart from './FirstChart';
import SecondChart from './SecondChart';
import ThirdChart from './ThirdChart';
import './Blinking.css'

function MonitoringPage() {
  return (
    <div>
      <Header />
      <ResponsiveContainer>
        <h1>Real-Time Monitoring</h1>
        <VisualizationSection>
          <Graph>
            <FirstChart />
            <p><span className='red'>[<div id='blink-red' /> - negative]</span><b>Total Dissolved Solids (TDS)</b> - cumulative measurement of inorganic salts, minerals, and other dissolved substances present in the water and nutrient solution used in hydroponics.</p>
          </Graph>
          <Graph>
            <SecondChart />
            <p><span className='red'>[<div id='blink-red' /> - negative]</span><b>Potential of Hydrogen (pH)</b> - quantitative measure of the acidity or basicity of aqueous or other liquid solutions.</p>
          </Graph>
          <Graph>
            <ThirdChart />
            <p><span className='red'>[<div id='blink-red' /> - negative]</span><b>Temperature (T)</b> - physical quantity that quantitatively expresses the attribute of hotness or coldness.</p>
          </Graph>
          <Graph>
            <p></p>
          </Graph>
        </VisualizationSection>
      </ResponsiveContainer>
      <Footer />
    </div>
  )
}

export default MonitoringPage

const ResponsiveContainer = styled.div`
  width: 100%;
  padding-top: 70px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const VisualizationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: calc(100vh - 70px);
  height: 100%;
  width: 100%;
`;

const Graph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: auto;
  margin: 10px;
  padding-bottom: 20px;

  p {
    width: 600px;
  }
  span {
    display: flex;
    align-items: center;
  }
`;
