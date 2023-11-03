import './Post.css'

function Post({ item }) {

  return (
    <li className="post">
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <div className="profile">
        <p>{item.userId}</p>
      </div>
    </li>
  )
}

export default Post;