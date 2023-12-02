import React from 'react'
import posts from '../posts';
import View_Post from './View_Post';


export default function PostScreen() {
  return (
    <div>{posts.map((post,index) => (
    
        <div key={post.id}>
          <h2>{post.name}'s Posts</h2>
            <View_Post key={index} post={post} />
            </div>
    ))}
     
      </div>
  )
}
