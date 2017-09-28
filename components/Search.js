import styled from 'styled-components'

const Search = styled.section`
  position: relative;
  margin-top: -150px;
  display: flex;
  justify-content: center;
  @media (max-width: 990px) {
    margin-top: -100px;
  }
  @media (max-width: 820px) {
    margin-top: -50px;
  }
`

const Wrapper = styled.div`
  max-width: 1020px;
  width: 100%;
  margin: 0 20px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  ${'' /* flex: 1 100%; */}
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.09);
  ${'' /* max-width: 230px; */}
  width: 23%;
  height: 230px;
  background: white;
  color: black;
  border-radius: 5px;
  margin-bottom: 60px;
  cursor: pointer;
  &#contemporary {
    background: url(../static/contemporary-1.jpg) no-repeat center center;
    background-size: cover;
  }
  &#modern {
    background: url(../static/modern-2.jpg) no-repeat center center;
    background-size: cover;
  }
  &#rustic {
    background: url(../static/rustic-1.jpg) no-repeat center center;
    background-size: cover;
  }
  &#tropical {
    background: url(../static/tropical-2.jpg) no-repeat center center;
    background-size: cover;
  }
  @media (max-width: 840px) {
    ${'' /* max-width: 200px; */}
    height: 180px;
    margin-bottom: 30px;
    font-size: .9em;
  }
  @media (max-width: 650px) {
    height: 120px;
    margin-bottom: 20px;
    font-size: .8em;
  }
  @media (max-width: 550px) {
    height: 120px;
    width: 49%;
    margin-bottom: 20px;
    font-size: .8em;
    ${'' /* flex-wrap: wrap; */}
  }
`

const CardTitleWrapper = styled.div`
  width: 100%;
  background-image: radial-gradient(50% 100%, #414141 0%, #000000 100%);
  padding: 20px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #FFF;
`

const Title = styled.h3`
  font-weight: 400;
  letter-spacing: 2px;
  margin: 0;
  @media (max-width: 990px) {
    font-size: 1em;
  }
  @media (max-width: 820px) {
    font-size: .9em;
  }
  @media (max-width: 500px) {
    font-size: .8em;
  }
`


export default () => (
  <Search>
    <Wrapper>
      <CardWrapper>
        <Card id="contemporary">
          <CardTitleWrapper>
            <Title>Contemporary</Title>
          </CardTitleWrapper>
        </Card>
        <Card id="modern">
          <CardTitleWrapper>
            <Title>Modern</Title>
          </CardTitleWrapper>
        </Card>
        <Card id="rustic">
          <CardTitleWrapper>
            <Title>Rustic</Title>
          </CardTitleWrapper>
        </Card>
        <Card id="tropical">
          <CardTitleWrapper>
            <Title>Tropical</Title>
          </CardTitleWrapper>
        </Card>
      </CardWrapper>
    </Wrapper>
  </Search>
)
