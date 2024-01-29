import { styled } from "styled-components"
import { FaHome } from "react-icons/fa";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from '/images/up_logo.svg'

const Header = () => {
  return (
    <Nav>
      <Link to='/urban-pergola/'>
        <Logo>
          {/* <img src='./images/up_logo.svg' /> */}
          <img src={logo} alt='logo'/>
        </Logo>
      </Link>
      <NavMenu>
        <Link to='/urban-pergola/'>
          <FaHome className='icon' />
          <span>HOME</span>
        </Link>
        <Link to='/urban-pergola/monitoring/'>
          <MdOutlineMonitorHeart className='icon' />
          <span>MONITORING</span>
        </Link>
      </NavMenu>
    </Nav>
  )
}

export default Header;

const Nav = styled.div`
  position: fixed;
  max-height: 70px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  z-index: 3;
`;

const Logo = styled.a`
  width: 110px;
  height: 75px;
  display: inline-block;
  
  img {
    padding: 10px 0px;
    display: block;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 18px;

  a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    text-decoration: none;
    
    @media (max-width:600px) {
      padding: 0 25px;
    }

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    .icon {
      color: black;
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: black;
      font-weight: bold;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 5px;
      white-space: nowrap;
      position: relative;

      @media (max-width:600px) {
        display: none;
      }

      &:before {
        background-color: #056732;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 3px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      cursor: pointer;
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;
