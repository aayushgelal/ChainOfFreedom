import React,{useState} from 'react'
import { Button } from '../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import CommentsSection from './CommentsSection';
import { Post, UserData } from '@/posts';
import { ChatBubbleBottomCenterIcon,PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconFull } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/outline';  


export default function View_Post({post} :{post:Post}) {
    const [showComments, setShowComments] = useState(false);
    const [showHeart, setShowHeart] = useState(false);

    const toggleHeart=()=>{
      console.log(showHeart);
      setShowHeart(!showHeart);

    }
    const toggleComments = () => {
      setShowComments(!showComments);
    };
  return (
    <Card className="mb-10 transition-transform  duration-300 ease-in-out lg:max-w-md  rounded-3xl shadow-lg ">

          <CardHeader className='flex flex-row items-center space-x-3'>
          <div className='overflow-hidden rounded-full bg-red-50 w-10 h-10' >
            <img className=' w-full h-full object-cover' src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg' alt='pho' />
            </div>
            <div className='flex flex-col'>
            <CardTitle className=' text-base'>{post.username}</CardTitle>

<CardDescription className=' text-sm'>{post.title}</CardDescription>
            </div>
            
        </CardHeader>
        <CardContent className='text-sm'>
        {post.image?<img
          src={post.image}
          alt="Card Image"
          className="w-full"
        />:null}
        
        {post.content}
      </CardContent>
      <CardFooter className='flex flex-col items-start'>  
         <div className='flex space-x-6 cursor-pointer'>
        {showHeart?<HeartIconFull onClick={toggleHeart} className='w-5' />: <HeartIcon className='w-5' onClick={toggleHeart} />}
      <div> 
      <ChatBubbleBottomCenterIcon onClick={toggleComments} className=' w-5' />


      </div>
      <PaperAirplaneIcon className='w-5' />

      </div>
      {showComments && <CommentsSection comments={post.comments} />}


      </CardFooter>

      </Card>

       
  )
}

 