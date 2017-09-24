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
    let imagePath = e.target.elements.imagePath.value
    // let file = e.target.elements.file.value

    // console.log(e.target.elements.file);

    if (title === '' || url === '' || imagePath === '') {
      window.alert('All fields are required.')
      return false
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = `http://${url}`
    }

    // let data = new FormData()
    // // console.log(`data`) // [object FormData]
    // // console.log(`DATA!!!!!${file}`)
    // data.append('data', file)
    // // use the file endpoint
    // console.log(file);
    // console.log(data)
    // fetch('https://api.graph.cool/file/v1/cj7r6gphd0kf40132l8g4ndvl', {
    //   method: 'POST',
    //   body: data
    // }).then(response => {
    //   return response.json()
    // }).then(image => {
    //   createPost(title, url, imagePath, imageId)
    //   console.log(`Success!!!`)
    //   this.setState({
    //     imageId: image.id,
    //     imageUrl: image.url,
    //   })
    // })

    this.props.createPost(title, url, imagePath, this.state.imageId)

    // reset form
    // e.target.elements.title.value = ''
    // e.target.elements.url.value = ''
    // e.target.elements.imagePath.value = ''
    // e.target.elements.image.value = ''

    // console.log(`Title: ${title}`);
    // console.log(`URL: ${url}`);
    // console.log(`Image Path: ${imagePath}`);
    // console.log(`File: ${file}`);
    // console.log(`⚡️ ⚡️ ⚡️ ⚡️ ⚡️ ⚡️ Blem: ${file[0]}`);


    // Image Upload Stuff!!!!!!!

    // uploadImage = (file) => {
    //   // prepare form data, use data key!
    //   let data = new FormData()
    //   console.log(`DATA!!!!!${data}`);
    //   console.log(`DATA!!!!!${file}`);
    //   data.append('data', file)
    //
    //   console.log(`Data Whatever 🍰 🍰 🍰 🍰 🍰${data}`);

      // // use the file endpoint
      // fetch('https://api.graph.cool/file/v1/cj7r6gphd0kf40132l8g4ndvl', {
      //   method: 'POST',
      //   body: data
      // }).then(response => {
      //   return response.json()
      // }).then(image => {
      //   this.setState({
      //     imageId: image.id,
      //     imageUrl: image.url,
      //   })
      // })

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
          <Label name='image_link'>Image Link</Label>
          <Input placeholder='This field will be removed' name='imagePath' />
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
  mutation createPost($title: String!, $url: String!, $imagePath: String!, $imageId: ID!) {
    createPost(title: $title, url: $url, imagePath: $imagePath, imageId: $imageId) {
      id
      title
      votes
      url
      imagePath
      createdAt
      image {
        id
      }
    }
  }
`

export default graphql(createPost, {
  props: ({ mutate }) => ({
    createPost: (title, url, imagePath, imageId) => mutate({
      variables: { title, url, imagePath, imageId },
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
