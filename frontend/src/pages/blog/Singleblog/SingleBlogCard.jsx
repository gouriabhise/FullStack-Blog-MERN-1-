import React from 'react'
import { formatDate } from '../../../utils/formatDate'
import EditorJSHTML from 'editorjs-html'

const editorJSHTML=EditorJSHTML()
const SingleBlogCard = ({blog}) => {
    const{title,content,author,coverImg,category,rating,createdAt}=blog||{}
//const htmlContent=content
//const htmlContent=editorJSHTML.parse(content).join('')
//todo with join
const htmlContent=content
  return (
    <>
      <div className='bg-white p-8'>
<div>
    <h1 className='md:text-4xl  text-3xl font-medium mb-4'>{title}</h1>
    <p className='mb-6'>{formatDate(createdAt)} by <span className='text-blue-400'>{author?.username}</span></p>
</div>
      </div>
      <div>
        <img src={coverImg} alt="cover image" className='w-full md:h-[520px] bg-cover'/>
      </div>
      <div className='mt-8 space-y-4'>
        <div dangerouslySetInnerHTML={{__html:htmlContent}} className='space-y-3 editorjsdiv'/>
        <div>
          <span className='text-lg font-medium'>Rating:</span>
          <span> {rating} (based on 2,370 reviews)</span>
   </div>
      </div>
    </>
  )
}

export default SingleBlogCard
