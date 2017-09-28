import React from 'react'
import { gql, graphql } from 'react-apollo'
import styled from 'styled-components'
import ErrorMessage from './ErrorMessage'
import PostUpvoter from './PostUpvoter'
import Post from './Card'

const Results = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
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

const POSTS_PER_PAGE = 9

class CardList extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render () {

    const { loading } = this.props.data

    if (loading) {
      console.log(`Loading 👏🏻 👏🏻 👏🏻 : ${this.props.data.loading}`)
      console.log(this.props.data)
      return (
        <Results>
          <Wrapper>
            <h2>Loading ⌛️</h2>
          </Wrapper>
        </Results>
      )
    }
    console.log(`Not Loading 🖕🏻 🖕🏻 🖕🏻 : ${this.props.data.loading}`)
    // console.log(`Not Loading 🖕🏻 🖕🏻 🖕🏻 : ${this.props.data.allPosts}`)
    // console.log(this.props.data)
    // const areMorePosts = allPosts.length > 2
    return (
      <Results>
        <Wrapper>
          <CardWrapper>
            {this.props.data.allPosts.map((post) => (
              <Post
                key={post.id}
                post={post}
              />
            ))}
          </CardWrapper>
          {/* {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''} */}
        </Wrapper>
      </Results>
    )
  }
}

const FeedQuery = gql`query allPosts {
  allPosts(orderBy: id_ASC) {
    id
    title
    votes
    url
    description
    createdAt
    style
    mobile
    type
    image {
      id
      url
    }
  }
}`

const ListPageWithData = graphql(FeedQuery)(CardList)

export default ListPageWithData

// function CardList ({ data: { loading, error, allPosts, _allPostsMeta }, loadMorePosts }) {
//   if (error) return <ErrorMessage message='Error loading blueprints' />
//   if (allPosts && allPosts.length) {
//     const areMorePosts = allPosts.length < _allPostsMeta.count
//     return (
//       <Results>
//         <Wrapper>
//           <CardWrapper>
//             {this.props.data.allPosts.map((post, index) =>
//               <Card
//                 key={post.id}
//                 post={post}
//                 refresh={() => this.props.data.refetch()}
//               />
//             )}
//           </CardWrapper>
//           {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
//         </Wrapper>
//       </Results>
//     )
//   }
//   return <div>Loading</div>
// }

// const allPosts = gql`
//   query allPosts($first: Int!, $skip: Int!) {
//     allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
//       id
//       title
//       votes
//       url
//       description
//       createdAt
//       image {
//         id
//         url
//       }
//     },
//     _allPostsMeta {
//       count
//     }
//   }
// `
//
// export default graphql(allPosts, {
//   options: {
//     variables: {
//       skip: 0,
//       first: POSTS_PER_PAGE
//     }
//   },
//   props: ({ data }) => ({
//     data,
//     loadMorePosts: () => {
//       return data.fetchMore({
//         variables: {
//           skip: data.allPosts.length
//         },
//         updateQuery: (previousResult, { fetchMoreResult }) => {
//           if (!fetchMoreResult) {
//             return previousResult
//           }
//           return Object.assign({}, previousResult, {
//             allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
//           })
//         }
//       })
//     }
//   })
// })(CardList)
