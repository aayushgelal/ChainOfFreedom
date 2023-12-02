import React from 'react'
import posts from '../../posts';
import View_Post from './View_Post';
import CreatePost from './CreatePost';


export default function PostScreen() {
  return (
    <div className='w-full  flex flex-col '>
          <CreatePost username='aayushgelal' profileLink='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg' />
    {posts.map((post,index) => 
   
    
            <View_Post  key={index} post={post} />
            
    )}
  
     
      </div>
  )
}
