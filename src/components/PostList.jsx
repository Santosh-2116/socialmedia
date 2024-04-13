import React, { useContext } from 'react'
import Post from './Post'
import { PostListData } from '../store/Post-list-store'
import WelcomeMessage from './WelcomeMessage'

export default function PostList() {
  const{postList,addInitialPosts}=useContext(PostListData)

  const fetchPosts=()=>{
    fetch("https://dummyjson.com/posts")
    .then(res=>res.json())
    .then((data)=>{addInitialPosts(data.posts)})
  }
  return (
    <div className='post-section'>
      <h2 className='text-center post-heading border-bottom pb-2'>Post</h2>
      {postList.length===0 && <WelcomeMessage fetchPosts={fetchPosts}/>}
      <div className='post-container'>
        {postList.map(post=><Post key={post.id} post={post}/>)}
      </div>
    </div>
  )
}
