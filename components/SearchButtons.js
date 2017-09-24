import styled from 'styled-components'

const SearchButtons = styled.section`
  position: relative;
  margin-bottom: 60px;
`

const Wrapper = styled.div`
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
  background-color: #FBFBFB;
  border: 1px solid #EDEDED;
  border-radius: 5px;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
const FilterLabels = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 400;
`
const Filter = styled.button`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  background: #FFF;
  border: 1px solid #EDEDED;
  border-radius: 5px;
  margin: 0 10px;
  color: #000;
  letter-spacing: 4px;
  text-transform: capitalize;
  padding: 10px 20px;
  font-size: 14px;
  &:hover {
    background-color: #f2f2f2;
    text-decoration: line-through;
    cursor: pointer;
  }
`

const Line = styled.hr`
  width: 80%;
  margin: 0 auto;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #EDEDED;
  padding: 0;
`

export default () => (
  <SearchButtons>
    <Wrapper>
      <Buttons>
        <FilterLabels>Filters:</FilterLabels>
        <Filter>🌴Contemporary</Filter>
        <Filter>🌲Rustic</Filter>
        <Filter>🍸Modern</Filter>
      </Buttons>
      <Line />
      <Buttons>
        <FilterLabels>Sort By:</FilterLabels>
        <Filter>📘Blueprint</Filter>
        <Filter>🏡Inspiration</Filter>
      </Buttons>
    </Wrapper>
  </SearchButtons>
)
