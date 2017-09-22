import { gql, graphql } from 'react-apollo'
import styled from 'styled-components'
import ErrorMessage from './ErrorMessage'
import PostUpvoter from './PostUpvoter'

const POSTS_PER_PAGE = 9

// const Results = styled.section.results`
//   position: relative;
// `

function CardList ({ data: { loading, error, allPosts, _allPostsMeta }, loadMorePosts }) {
  if (error) return <ErrorMessage message='Error loading blueprints' />
  if (allPosts && allPosts.length) {
    const areMorePosts = allPosts.length < _allPostsMeta.count
    return (
      <section className="results">
        <div className="wrapper">
          <div className="card-wrapper">
            {allPosts.map((post, index) =>
              <div className="card" key={post.id} style={{background: `url(${post.imagePath}) center center / cover no-repeat`}}>
                <div className="card-title-wrapper">
                  <span>{index + 1}</span>
                  <a href={post.url}><h3>{post.title}</h3></a>
                  <PostUpvoter id={post.id} votes={post.votes} />
                </div>
              </div>
            )}
          </div>
          {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
        </div>
        <style jsx>{`
          section.results {
            position: relative;
          }
          .wrapper {
            max-width: 1020px;
            width: 100%;
            margin: 0 auto;
          }
          .card-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .card {
            // background-position: center center;
            // background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            display: flex;
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
          }
          .card:hover {
            box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
          }
          .card-title-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
            background-image: radial-gradient(50% 100%, #414141 0%, #000000 100%);
            padding: 20px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
            color: #FFF;
          }
          h3, a {
            font-weight: 400;
            letter-spacing: 2px;
            margin: 0;
            text-transform: capitalize;
            text-decoration: none;
            color: #FFF;
          }
          a:hover {
            text-decoration: line-through;
          }
          .card.ad {
            border: 1px solid #EDEDED;
            align-items: center;
          }
          .card.ad a {
              padding: 1rem;
              font-size: 1.2rem;
              letter-spacing: 4px;
              color: #000;
              text-align: center;
              text-decoration: none; }
            .card.ad a:hover {
              text-decoration: line-through;
            }
        `}</style>
      </section>
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
      imagePath
      createdAt
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
