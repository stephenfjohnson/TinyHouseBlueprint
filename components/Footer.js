import styled from 'styled-components'

const Footer = styled.footer`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #FBFBFB;
  border: 1px solid #EDEDED;
  text-align: center;
  a {
    letter-spacing: 4px;
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: line-through;
    }
  }
`

export default () => (
  <Footer>
    <a href="http://stephenfjohnson.com/">💀 Made By Stephen ⚡️</a>
  </Footer>
)
