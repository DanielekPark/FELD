import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { FC, Fragment } from 'react'
import Searchbar from './searchbar'

const UserNote: FC = () => {

  return (
    <>
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-4 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Find a tool</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Have a design or code need? Explore the links, from altering images or build a fullstack app without installing node. If you are the owner of the site or if a link is broken please contact me and I will remove it. Do you suggestion for a link? Send me a message on{' '} <a className='text-blue-600/100 font-bold' href='https://tally.so/r/w20ZVm' target='_blank' rel='noreferrer'>Tally </a> . More to features are coming!
          </p>
          <Searchbar />
        </div>
      </div>
    </div>      
    </>
  )
}

export default UserNote
