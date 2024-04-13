import React, { useContext, useRef } from 'react'
import { PostListData } from '../store/Post-list-store';

export default function CreatePost() {
  const {addPost}=useContext(PostListData);

  const postTitleElement=useRef("");
  const postBodyElement=useRef("");
  const userIdElement=useRef("");
  const reactionsElement=useRef("");
  const tagsElement=useRef("");

  const handleSubmit=(event)=>{
    event.preventDefault();
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const userId=userIdElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");

    postTitleElement.current.value="";
    postBodyElement.current.value="";
    userIdElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
    
    addPost(postTitle,postBody,userId,reactions,tags);
  }
  return (
    <div className=''>
      <h2 className='text-center mt-2 mb-3 fw-bold'>CREATE POST</h2>
      <form className='post-form mx-auto' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Enter Your User Id</label>
          <input type="text" className="form-control" id="userId" placeholder='User Id...' ref={userIdElement}/>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" placeholder='How are you feeling today...' ref={postTitleElement}/>
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea resize="none" rows={4} type="text" className="form-control" id="body" placeholder='Write you words here...' ref={postBodyElement}/>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of Reactions</label>
          <input type="text" className="form-control" id="reactions" placeholder='How many people reacted to this post...' ref={reactionsElement}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter Your Hashtags</label>
          <input type="text" className="form-control" id="tags" placeholder='Please enter tags using space' ref={tagsElement}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
