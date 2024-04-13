import { Button } from 'bootstrap'
import React from 'react'

export default function WelcomeMessage({fetchPosts}) {
  return (
    <center>
      <h1 className='text-center mt-5 mb-3'>There are no posts.</h1>
      <button type='button' className='btn btn-primary' onClick={fetchPosts}>Get Posts From Server</button>
    </center>
  )
}
