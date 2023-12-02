import { CommentType } from '@/posts';
import React from 'react'
import { ArrowUturnRightIcon } from '@heroicons/react/24/outline';


export default function CommentsSection({comments}:{comments:CommentType[]}) {
  return (
   
          <div>
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
   

    )
}
const Comment = ( {comment}:{comment:CommentType}) => {
    return (
      <div style={{ padding: '4px', marginBottom: '2px' }}>
        <p className='text-base font-bold'>{comment.commentSenderUsername}</p>
        <p>{comment.text}</p>
        {comment.replies && comment.replies.length > 0 && (
          <div style={{ marginLeft: '5px' }}>
            {comment.replies.map((reply, index) => (
              <div className='flex items-center'><ArrowUturnRightIcon className='w-5 font-bold text-gray-500 -scale-y-100 ' />

              <Comment key={index} comment={reply} />
              </div>
            ))}
          </div>

        )}
      </div>
    );
  };