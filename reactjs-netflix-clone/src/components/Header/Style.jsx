import styled from 'styled-components'
import HeaderBg from '../../assets/header-bg.jpg'

export const HeaderCon = styled.section`
  height: 720px;
  background: url(${HeaderBg});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  border-bottom: 8px solid #222;
  background-position: center;
  background-size: cover;
`

export const NavCon = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  svg {
    width: 10.4375rem;
    height: 2.8125rem;
    fill: red;
  }
`
export const Menu = styled.ul`
  display: flex;

  li {
    margin: 0rem 2rem;
    list-style: none;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`
