import React from 'react'
import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'
import styled from 'styled-components'

const SearchButtons = styled.section`
  position: relative;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  max-width: 1020px;
  width: 100%;
  margin: 0 20px;
  background-color: #FBFBFB;
  border: 1px solid #EDEDED;
  border-radius: 5px;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  flex-wrap: wrap;
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

class Search extends React.Component {

  // function that assigns a const from each button name.
  // That constant is than passed into the GraphQL filter query on click


  // Or the correct way to do it...
  // Create new data type for each search type I.E. mobile
  // Mobile would be created as a bool and yes or no passed to the form
  // Filters would be a list of strings that contain emojis and using linking in GraphQL to create the relationship
  // This would be the best practise and would future proof everything

  // FUCK 🖕🏻

  static propTypes = {
    data: React.PropTypes.object,
  }

  // let contemporary = e.target.elements.button.name

  // getInitialState () {
  //   var disabled = this.state.disabled ? 'disabled' : ''
  //   return {
  //     disabled: false
  //   };
  // }

  render () {
    return (
      <SearchButtons>
        <Wrapper>
          {this.props.data.allPosts.map((post) => {
            <span>{post.style}</span>
            // <h1>BLAAAAA</h1>
            // <Buttons>
            //   <FilterLabels>Filters:</FilterLabels>
            //   <Filter>{post.id}</Filter>
            //   <span>{post.title}</span>
            //   <span>{post.style}</span>
            // </Buttons>
            console.log(`Search Buttons Return ⤵️`)
            console.log(post.title)
          })}
          <Buttons>
            <FilterLabels>Filters:</FilterLabels>
            {/* <Filter {disabled} name='contemporary'>🍃Contemporary</Filter> */}
            <Filter name='rustic'>🌲Rustic</Filter>
            <Filter>🍸Modern</Filter>
            <Filter>♻️Green Design</Filter>
            <Filter>🌴Tropical</Filter>
            <Filter>💸Luxury</Filter>
            <Filter>🌊Cottage</Filter>
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
  }
}

const SearchQuery = gql`query allPosts {
  allPosts(orderBy: id_ASC) {
    id
    title
    style
    mobile
    type
  }
}`

const SearchItems = graphql(SearchQuery)(Search)

export default SearchItems
