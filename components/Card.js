import React from 'react'
import { graphql, gql } from 'react-apollo'
import styled from 'styled-components'
import PostUpvoter from './PostUpvoter'

const Card = styled.div`
  // https://iamsteve.me/blog/entry/how-to-flexible-squares-with-css
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
  @media (max-width: 990px) {
    max-width: 250px;
    height: 250px;
  }
  @media (max-width: 990px) {
    max-width: 300px;
    height: 300px;
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

class Post extends React.Component {

  static propTypes = {
    post: React.PropTypes.object
  }

  render () {

    console.log(this.props.post)

    return (
      <Card style={{background: `url(${this.props.post.image.url}) center center / cover no-repeat`}}>
        {/* <span>{post.description}</span> */}
        <CardDescription>
          <span>{this.props.post.description}</span>
        </CardDescription>
        <CardTitleWrapper>
          {/* <span>{index + 1}</span> */}
          <a target='_blank' href={this.props.post.url}><Title>{this.props.post.title}</Title></a>
          <PostUpvoter id={this.props.post.id} votes={this.props.post.votes} />
        </CardTitleWrapper>
      </Card>
    )
  }
}

export default Post
