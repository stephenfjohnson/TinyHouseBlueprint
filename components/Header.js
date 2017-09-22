import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 14px 30px rgba(0,0,0,0.05);
`
const Logo = styled.a`
  display: flex;
  align-items: center;
  flex: 2;
  padding-left: 20px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled.div`
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 10px 20px;
  color: #000;
  text-decoration: none;
  @media (max-width: 700px) {
		padding: 10px 5px;
	}
`

const NavItemLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 10px 20px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: line-through;
  }
  &.cta {
    background-image: linear-gradient(-134deg, #3F7FB0 0%, #245880 100%);
    border-radius: 5px;
    margin-right: 20px;
    color: #FFF;
  }
  @media (max-width: 700px) {
    letter-spacing: 1px;
		padding: 10px 5px;
	}
`

export default ({ pathname }) => (
  <Header>
    <Link href='/'>
      <Logo>
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="38">
          <path d="M21.3 0c-.28.02-.56.1-.78.28L.58 15.48c-.4.3-.63.8-.57 1.3.1.52.4.96.9 1.16.5.2 1 .12 1.4-.2l2.5-1.88v20.7c0 .5.28 1 .7 1.25.47.3 1 .3 1.46 0 .46-.2.73-.7.7-1.2V13.7L21.4 3.2l19.08 14.54c.4.32.94.4 1.42.2.47-.2.8-.64.86-1.15.07-.58-.15-1.08-.56-1.38L22.24.22c-.27-.2-.6-.3-.94-.22zm15.25 17.54c-.38 0-.74.16-1 .43-.27.27-.4.64-.4 1.02v16.1h-7.6V22.3c0-.77-.64-1.4-1.43-1.4h-9.64c-.73.07-1.28.68-1.27 1.4v12.83H11c-.5 0-1 .26-1.25.7-.26.45-.26 1 0 1.44.26.45.74.72 1.25.7h25.6c.77 0 1.4-.63 1.4-1.4v-17.6c0-.4-.14-.76-.4-1.03s-.65-.43-1.04-.42zm-18.5 6.2h6.65v11.4h-6.65v-11.4z"></path>
        </svg>
      </Logo>
    </Link>
    <Nav>
      <NavItem>
        <Link href='/'>
          <NavItemLink className={pathname === '/' && 'is-active'}>Blueprints</NavItemLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/'>
          <NavItemLink className={pathname === '/' && 'is-active'}>Insperation</NavItemLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link prefetch href='/add'>
          <NavItemLink className={'cta'}>Submit Link</NavItemLink>
        </Link>
      </NavItem>
    </Nav>
  </Header>
)
