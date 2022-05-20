import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { FC, Fragment } from 'react'
import Searchbar from './searchbar'

const UserNote: FC = () => {
  return (
    <>
      <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='pb-4 bg-white sm:pb-8 md:pb-10 lg:w-full lg:pb-10'>
            <section className='lg:flex mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>Find a tool</span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  Have a design or code need? Explore the links, from altering
                  images or build a fullstack app without installing node. If
                  you are the owner of the site or if a link is broken please
                  contact me and I will remove it. Do you suggestion for a link?
                  Send me a message on{' '}
                  <a
                    className='text-blue-600/100 font-bold'
                    href='https://tally.so/r/w20ZVm'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Tally
                  </a>
                  . More to features are coming!
                </p>
              </div>
              <div>
                <Searchbar />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserNote
