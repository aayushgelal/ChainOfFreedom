import React from 'react'
import { Button } from './ui/button'

export default function View_Post() {
  return (
    <div className=''>
        <div className='flex'>
            <div className='overflow-hidden rounded-full bg-red-50 w-20 h-20' >
            <img className=' w-full h-full object-cover' src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg' alt='pho' />
            </div>
            <h1>
               <Button>Hello</Button> 
            </h1>

        </div>
    </div>
  )
}
