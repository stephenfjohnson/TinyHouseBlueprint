import React from 'react'
import { graphql, gql } from 'react-apollo'
import styled from 'styled-components'
import EllipsisText from 'react-ellipsis-text'
import PostUpvoter from './PostUpvoter'

const Card = styled.div`
  background-size: cover;
  position: relative;
  height: 300px;
  width: 32%;
  display: flex;
  flex-direction: column;
  ${'' /* align-items: flex-end; */}
  ${'' /* flex: 1 100%; */}
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  ${'' /* max-width: 300px; */}
  background: white;
  color: black;
  border-radius: 5px;
  margin-bottom: 60px;
  transition: 200ms ease-in-out box-shadow;
  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 990px) {
    ${'' /* max-width: 250px; */}
    height: 250px;
  }
  @media (max-width: 500px) {
    width: 49%;
    height: 200px;
    font-size: .8em;
    letter-spacing: .2px;
    margin-bottom: 20px;
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
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  color: #FFF;
  hyphens: auto;
  width: 100%;
  &:hover {
    display: flex;
  }
  @media (max-width: 500px) {
    font-size: .7em;
    letter-spacing: .2px;
  }
`

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 100%;
  background-image: radial-gradient(50% 100%, #414141 0%, #000000 100%);
  ${'' /* padding: 20px; */}
  padding: 20px;
  box-sizing: border-box;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #FFF;
  width: 100%;
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
  @media (max-width: 500px) {
    font-size: .8em;
    letter-spacing: .5px;
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
          <span><EllipsisText text={this.props.post.description} length={160} /></span>
          <span>{this.props.post.style}</span>
          <span>{this.props.post.mobile}</span>
          <span>{this.props.post.type}</span>
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
