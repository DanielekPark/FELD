import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { useEffect } from 'react'
import React, { FC, ReactElement } from 'react'

const Nav: FC = () => {
  return (
    <nav className='bg-sky-400 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link href='/'>
          <span className='font-semibold text-xl tracking-tight cursor-pointer'>
            Tool Finder
          </span>
        </Link>
      </div>

        <div className='mt-2 flex items-center space-x-4 overflow-y-auto whitespace-nowrap'>
          <Link href='/layout'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
              Layout
            </a>
          </Link>
          <Link href='/image'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
              Image tools
            </a>
          </Link>
          <Link href='/fedesigntools'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
              Dev design
            </a>
          </Link>
          <Link href='/git'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
              Git
            </a>
          </Link>
          <Link href='/contact'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
              Contact
            </a>
          </Link>

        </div>
    </nav>
  )
}

export default Nav
