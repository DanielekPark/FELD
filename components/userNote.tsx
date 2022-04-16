import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { FC } from 'react'

const UserNote: FC = () => {
  return (
    <div className='py-4'>
      <div className='shadow-lg group container rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div'>
        <div>
          <div className='py-8 px-4 bg-white  rounded-b-md fd-cl'>
            <span className='block text-lg text-gray-800 font-bold tracking-wide'>
              Browse the list
            </span>
            <span className='block text-gray-600 text-sm'>
              Do you have a design, front-end, and or backend need? Explore some of the links, from altering images, build a backend application without installing node, or making shapes from images. You can find a link that may help. If you are the owner of the site or if a link is broken please contact me and I will remove it. Do you have a link on not seen in the results? Send me a message on <a className="text-blue-600/100 font-bold" href="https://tally.so/r/w20ZVm" target="_blank" rel="noreferrer">Tally</a>. More features are planned for development, good luck and happy coding and designing!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNote