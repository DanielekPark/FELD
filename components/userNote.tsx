import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { FC } from 'react'

const UserNote: FC = () => {
  return (
    <div className='py-4'>
      <div className='shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div'>
        <div>
          <div className='py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25'>
            <span className='block text-lg text-gray-800 font-bold tracking-wide'>
              Browse the list
            </span>
            <span className='block text-gray-600 text-sm'>
              Do you have a design, front-end, and or backend need? Explore some of the links, from creating shapes from images, build a backend application without installing node, or testing come CSS animations. You can find a link that can help. Good luck.
            </span>
          </div>
        </div>
        <div className='absolute opacity-0 fd-sh group-hover:opacity-100'>
          <span className='text-3xl font-bold text-white tracking-wider leading-relaxed font-sans'>
            Paris city of light
          </span>
          <div className='pt-8 text-center'>
            <button className='text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg'>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNote
