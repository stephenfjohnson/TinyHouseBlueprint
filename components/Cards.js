import { gql, graphql } from 'react-apollo'
import styled from 'styled-components'
import ErrorMessage from './ErrorMessage'
import PostUpvoter from './PostUpvoter'

const Results = styled.section`
  position: relative;
`

const Wrapper = styled.div`
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Card = styled.div`
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1 100%;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  height: 300px;
  background: white;
  color: black;
  border-radius: 5px;
  margin-bottom: 60px;
  transition: 200ms ease-in-out box-shadow;
  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
  }
`

const Ad = styled.div`
  border: 1px solid #EDEDED;
  align-items: center;
  a {
    padding: 1rem;
    font-size: 1.2rem;
    letter-spacing: 4px;
    color: #000;
    text-align: center;
    text-decoration: none;
  }
  a:hover {
    text-decoration: line-through;
  }
`

const CardDescription = styled.div`
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);
  display: flex;
  flex-grow: 2;
  align-items: center;
  padding: 20px;
  color: #FFF;
  &:hover {
    display: flex;
  }
`

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 100%;
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
  text-transform: capitalize;
  text-decoration: none;
  color: #FFF;
  &:hover {
    text-decoration: line-through;
  }
`

const POSTS_PER_PAGE = 9

function CardList ({ data: { loading, error, allPosts, _allPostsMeta }, loadMorePosts }) {
  if (error) return <ErrorMessage message='Error loading blueprints' />
  if (allPosts && allPosts.length) {
    const areMorePosts = allPosts.length < _allPostsMeta.count
    return (
      <Results>
        <Wrapper>
          <CardWrapper>
            {allPosts.map((post, index) =>
              <Card key={post.id} style={{background: `url(${post.image.url}) center center / cover no-repeat`}}>
                {/* <span>{post.description}</span> */}
                <CardDescription>
                  <span>{post.description}</span>
                </CardDescription>
                <CardTitleWrapper>
                  {/* <span>{index + 1}</span> */}
                  <a target='_blank' href={post.url}><Title>{post.title}</Title></a>
                  <PostUpvoter id={post.id} votes={post.votes} />
                </CardTitleWrapper>
              </Card>
            )}
          </CardWrapper>
          {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
        </Wrapper>
      </Results>
    )
  }
  return <div>Loading</div>
}

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      description
      createdAt
      image {
        id
        url
      }
    },
    _allPostsMeta {
      count
    }
  }
`

export default graphql(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          })
        }
      })
    }
  })
})(CardList)
