import React from 'react'
import { randomBg } from '../utils/randomBg'

type Props = {
  name: string
  link: string
  details: string
}

const Card: React.FC<Props> = ({ name, link, details }: Props) => {
  return (
    <li>
      <div className='space-y-4'>
        <div
          className='aspect-w-3 aspect-h-2'
          style={{ background: `linear-gradient(to right, ${randomBg()})` }}
        >
          {/* <img
            className='object-cover shadow-lg rounded-lg'
            src='https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
            alt=''
          /> */}
          <div
            className={`mx-auto h-40 w-40 xl:w-56 xl:h-56 ${randomBg()}`}
          ></div>
        </div>
        <div className='text-lg leading-6 font-medium space-y-1'>
          <a href={link} target='_blank' rel="noreferrer" className='text-blue-500'>
            <h3>{name}</h3>
          </a>
          <p className='text-black-600'>{details}</p>
        </div>
      </div>
    </li>
  )
}

/* 
card
https://tailwindui.com/components/marketing/sections/blog-sections
https://tailwindui.com/components/marketing/sections/team-sections
 */

export default Card
