import React from 'react'
import { gql, graphql } from 'react-apollo'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'

const SubmitPost = styled.section`
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  // position: fixed;
  // z-index: 100;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 135px);
  // display: none;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px;
`

const Input = styled.input`
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid #EDEDED;
  font-size: 1.1rem;
  padding: 10px;
`

const Textarea = styled.textarea`
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid #EDEDED;
  font-size: 1.1rem;
  padding: 10px;
`

const Label = styled.label`
  margin-bottom: 5px;
`

const SubmitButton = styled.button`
  background: #000;
  border: 1px solid #EDEDED;
  border-radius: 5px;
  color: #FFF;
  letter-spacing: 4px;
  text-transform: capitalize;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
`

class Submit extends React.Component {
  state = {
    imageId: '',
    imageUrl: '',
  }
  handleSubmit = (e) => {
    e.preventDefault()

    let title = e.target.elements.title.value
    let url = e.target.elements.url.value
    let description = e.target.elements.description.value
    // let file = e.target.elements.file.value

    // console.log(e.target.elements.file);

    if (title === '' || url === '' || description === '') {
      window.alert('All fields are required.')
      return false
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = `http://${url}`
    }

    this.props.createPost(title, url, description, this.state.imageId)

    }


  onDrop = (files) => {
    // prepare form data, use data key!
    let data = new FormData()
    data.append('data', files[0])

    // use the file endpoint
    fetch('https://api.graph.cool/file/v1/cj7r6gphd0kf40132l8g4ndvl', {
      method: 'POST',
      body: data
    }).then(response => {
      return response.json()
    }).then(image => {
      this.setState({
        imageId: image.id,
        imageUrl: image.url,
      })
    })
  }

  render (){
    return (
      <SubmitPost>
        <Form onSubmit={this.handleSubmit}>
          <h1>Submit</h1>
          <p>Add a entry to Tiny House Blueprint.</p>
          <Label name='title'>Title of Blueprint</Label>
          <Input placeholder='title' name='title' />
          <Label name='url'>Add url to Blueprint</Label>
          <Input placeholder='example.com' name='url' />
          <Label name='description'>Description</Label>
          <Textarea placeholder='Two sentences that summerise the blueprint or inspiration' name='description' />
          <Label name='image'>Upload image</Label>
          {/* <Input type="file" name='file' /> */}
          <Dropzone
              onDrop={this.onDrop}
              accept='image/*'
              multiple={false}
            >
              <div>Drop an image or click to choose</div>
            </Dropzone>
          <SubmitButton type='submit'>Submit</SubmitButton>
        </Form>
      </SubmitPost>
    )
  }
}

const createPost = gql`
  mutation createPost($title: String!, $url: String!, $description: String, $imageId: ID!) {
    createPost(title: $title, url: $url, description: $description, imageId: $imageId) {
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
    }
  }
`

export default graphql(createPost, {
  props: ({ mutate }) => ({
    createPost: (title, url, description, imageId) => mutate({
      variables: { title, url, description, imageId },
      updateQueries: {
        allPosts: (previousResult, { mutationResult }) => {
          const newPost = mutationResult.data.createPost
          return Object.assign({}, previousResult, {
            // Append the new post
            allPosts: [newPost, ...previousResult.allPosts]
          })
        }
      }
    })
  })
})(Submit)
