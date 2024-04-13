import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostListData } from '../store/Post-list-store';

export default function Post({post}) {
  const{deletePost}=useContext(PostListData)
  return (
    <div className="card" style={{width: "30rem"}}>
        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-icon" onClick={() => deletePost(post.id)}><MdDelete /></span>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <div className='hashtags-section'>
              {post.tags.map(tag=><span key={tag} className="badge text-bg-primary">{tag}</span>)}
            </div>
            <div className="alert alert-success post-reactions" role="alert">
              This post has been reacted by {post.reactions} people.
            </div>
        </div>
    </div>
  )
}
