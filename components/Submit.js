import { gql, graphql } from 'react-apollo'

function Submit ({ createPost }) {
  function handleSubmit (e) {
    e.preventDefault()

    let title = e.target.elements.title.value
    let url = e.target.elements.url.value
    let imagePath = e.target.elements.imagePath.value

    if (title === '' || url === '' || imagePath === '') {
      window.alert('Both fields are required.')
      return false
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = `http://${url}`
      imagePath = `http://${imagePath}`
    }

    createPost(title, url, imagePath)

    // reset form
    e.target.elements.title.value = ''
    e.target.elements.url.value = ''
    e.target.elements.imagePath.value = ''
  }

  return (
    <div className="modal">
      <div id='close' className='close'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path d="M34.3 1.82C31.43.64 28.28 0 25 0 12.26 0 1.7 9.53.2 21.9c-.1 1-.2 2.03-.2 3.1 0 13.8 11.2 25 25 25s25-11.2 25-25c0-10.5-6.48-19.5-15.7-23.18zm-.95 30.14c.38.37.38 1.02 0 1.4-.2.2-.43.26-.7.26-.26 0-.48-.1-.7-.27L25 26.4l-6.96 6.95c-.2.22-.43.27-.7.27-.26 0-.48-.1-.7-.27-.37-.37-.37-1.02 0-1.4L23.62 25l-6.95-6.96c-.38-.37-.38-1.02 0-1.4.37-.37 1.02-.37 1.4 0L25 23.62l6.96-6.95c.37-.38 1.02-.38 1.4 0 .37.37.37 1.02 0 1.4L26.38 25l6.95 6.96z"></path>
        </svg>
      </div>
      <form className='form-wrapper' onSubmit={handleSubmit}>
        <h1>Submit</h1>
        <p>For now in the url section just submit a link to a image on another server.</p>
        <label name='title'>Title</label>
        <input placeholder='title' name='title' />
        <label name='url'>URL</label>
        <input placeholder='url' name='url' />
        <label name='image_link'>Image Link</label>
        <input placeholder='Image Link' name='imagePath' />
        <button type='submit'>Submit</button>
      </form>
      <style jsx>{`
        .modal {
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
        }
        form.form-wrapper {
          display: flex;
          flex-direction: column;
          margin: 50px;
        }
        input {
          border-radius: 5px;
          margin-bottom: 20px;
          border: 1px solid #EDEDED;
          font-size: 1.1rem;
          padding: 10px;
        }
        button {
          background: #000;
          border: 1px solid #EDEDED;
          border-radius: 5px;
          color: #FFF;
          letter-spacing: 4px;
          text-transform: capitalize;
          padding: 10px 20px;
          font-size: 14px;
          cursor: pointer;
        }
        .modal.opened-modal {
          display: flex;
        }
        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          display: none;
        }
      `}</style>
    </div>
  )
}

const createPost = gql`
  mutation createPost($title: String!, $url: String!, $imagePath: String!) {
    createPost(title: $title, url: $url, imagePath: $imagePath) {
      id
      title
      votes
      url
      imagePath
      createdAt
    }
  }
`

export default graphql(createPost, {
  props: ({ mutate }) => ({
    createPost: (title, url, imagePath) => mutate({
      variables: { title, url, imagePath },
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
