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

const Select = styled.select`
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid #EDEDED;
  font-size: 1.1rem;
  padding: 10px;
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
    title: '',
    url: '',
    description: '',
    imageId: '',
    imageUrl: '',
  }

  // width: 100%;
  //   height: 200px;
  //   border-width: 2px;
  //   border-color: #666;
  //   border-style: dashed;
  //   border-radius: 5px;
  //   padding: 20px;
  //   box-sizing: border-box;
  //   margin-bottom: 20px;

  // handleTitleChange = (evt) {
  //   this.setState({ title: evt.target.value })
  // }
  //
  // handleUrlChange = (evt) {
  //   this.setState({ url: evt.target.value })
  // }
  //
  // handleDescriptionChange = (evt) {
  //   this.setState({ description: evt.target.value })
  // }

  handleSubmit = (e) => {
    e.preventDefault()

    let title = e.target.elements.title.value
    let url = e.target.elements.url.value
    let description = e.target.elements.description.value
    let style = e.target.elements.style.value
    let mobile = e.target.elements.mobile.value
    let type = e.target.elements.type.value
    // let file = e.target.elements.file.value

    console.log(style)
    console.log(mobile)
    console.log(type)



    // console.log(e.target.elements.file);

    if (title === '' || url === '' || description === '') {
      window.alert('All fields are required.')
      return false
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = `http://${url}`
    }

    this.props.createPost(title, url, description, style, mobile, type, this.state.imageId)

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
      console.log(response);
    }).then(image => {

      alert(`Image is Uploaded 👊`)
      // console.log(`Upload Complete`)
      // console.log(data)

      // console.log(imageUrl);
      // return this.props.EnableSubmit

      // if (image) {
      //   isUploaded = true
      //   console.log(`Uploaded: ${isUploaded}`)
      // } else {
      //   isUploaded = false
      //   console.log(`Not uploaded: ${isUploaded} `)
      // }



      this.setState({
        imageId: image.id,
        imageUrl: image.url,
      })
    })
  }

  render (){
    // if (isUploaded === true) {
    //   <SubmitButton type='submit'>Submit</SubmitButton>
    // } else {
    //   <SubmitButton disabled type='submit'>Uploading</SubmitButton>
    // }
    const overlayStyle = {
      width: '100%',
      height: '200px',
      borderWidth: '2px',
      borderColor: '#666',
      borderStyle: 'dashed',
      borderRadius: '5px',
      padding: '20px',
      boxSizing: 'border-box',
      marginBottom: '20px',
    };
    const { title, url, description, style, mobile, type } = this.state
    // const isEnabled = title.length > 0 && url.length > 0 && description.length > 0 && isUploaded === true
    return (
      <SubmitPost>
        <Form onSubmit={this.handleSubmit}>
          <h1>Submit</h1>
          <p>Add a entry to Tiny House Blueprint.</p>
          <Label name='title'>Title of Blueprint</Label>
          <Input placeholder='title' name='title' />
          <Label name='url'>Add url to Blueprint</Label>
          <Input placeholder='example.com' name='url' />
          <Label name='style'>Style</Label>
          <Select name='style'>
            <option value='contemporary'>Contemporary</option>
            <option value='rustic'>Rustic</option>
            <option value='luxury'>Luxury</option>
            <option value='green-design'>Green Design</option>
            <option value='tropical'>Tropical</option>
            <option value='cottage'>Cottage</option>
          </Select>
          <Label name='mobile'>Mobile?</Label>
          <Select name='mobile'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </Select>
          <Label name='type'>Type?</Label>
          <Select name='type'>
            <option value='blueprint'>Blueprint</option>
            <option value='inspiration'>Inspiration</option>
          </Select>
          <Label name='description'>Description</Label>
          <Textarea placeholder='Two sentences that summerise the blueprint or inspiration' rows='6' name='description' />
          <Label name='image'>Upload image</Label>
          {/* <Input type="file" name='file' /> */}
          <Dropzone
              style={overlayStyle}
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
  mutation createPost($title: String!, $url: String!, $description: String, $style: String, $mobile: String, $type: String, $imageId: ID!) {
    createPost(title: $title, url: $url, description: $description, style: $style, mobile: $mobile, type: $type, imageId: $imageId) {
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
  }
`

export default graphql(createPost, {
  props: ({ mutate }) => ({
    createPost: (title, url, description, style, mobile, type, imageId) => mutate({
      variables: { title, url, description, style, mobile, type, imageId },
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
