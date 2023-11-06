import { memo } from 'react';
import './Post.css'

const Post = memo(({ item }) => {

  return (
    <li className="post">
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <div className="profile">
        <p>{item.userId}</p>
      </div>
    </li>
  )
})

Post.displayName = 'Post';
export default Post;