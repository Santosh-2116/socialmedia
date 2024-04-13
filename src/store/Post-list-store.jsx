import { createContext, useReducer } from "react";

const default_Context={postList:[],addPost:()=>{},addInitialPosts:()=>{},deletePost:()=>{}}

export const PostListData = createContext(default_Context);

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
    }else if(action.type==="ADD_INITIAL_POSTS"){
        newPostList=action.payload.posts
    }else if(action.type==="DELETE_POST"){
        newPostList=currPostList.filter(item=>item.id!==action.payload.id)
    }
    return newPostList;
}

const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,[]);
    const addPost=(postTitle,postBody,userId,reactions,tags)=>{
        dispatchPostList({
            type:"ADD_POST",
            payload:{id:Date.now(),title:postTitle,body:postBody,reactions:reactions,userId:userId,tags:tags}
        })
    }
    const addInitialPosts=(posts)=>{
        dispatchPostList({
            type:"ADD_INITIAL_POSTS",
            payload:{posts}
        })
    }
    const deletePost=(id)=>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{id}
        })
    }
    return <PostListData.Provider value={{postList,addPost,deletePost,addInitialPosts}}>
        {children}
    </PostListData.Provider>
}

const DEFAULT_POST_LIST=[
    {
        id:"1",
        title:"Going to Mumbai",
        body:"Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out",
        reactions:"2",
        userId:"user-5",
        tags:["vacation","Mumbai","Enjoying"]
    }
]

export default PostListProvider;