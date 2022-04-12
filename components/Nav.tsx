import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { useEffect } from 'react'
import React, { FC, ReactElement } from 'react'

const Header: FC = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-sky-400 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>
          Link Directory
        </span>
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Design
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Front-End
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
          >
            Backend
          </a>
        </div>
      </div>
    </nav>
  )
}


export default Header