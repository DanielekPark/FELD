import type { NextPage } from 'next'
import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import React, { useState, useEffect, FC, useRef } from 'react'
import Footer from './footer'
import Error from './error'
import Nav from './Nav'
import { useRouter } from 'next/router'

const Searchbar = () => {
  const [searchItem, setSearchItem] = useState<string>('')
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()
  const { query } = router
  const { id } = query

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }   
  
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => { 
    const input = e.currentTarget.value
    setSearchItem(input)
  }

  const search = () => {
    if(searchItem.length < 1) return

    const encoded = encodeURIComponent(searchItem)
    router.push(
      {
        pathname: `/results/${encoded}`,
        query: {tags: encoded}
      },
      undefined,
      {shallow: true}
    )
  }  

  return (
    <>
      <div className='bg-white px-4 sm:px-6 lg:px-8 lg:py-24'>
        <div className='relative max-w-xl mx-auto'>
          <div className='mt-12'>
            <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
              <div className='sm:col-span-2'>
                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label> */}
                <div className='flex items-center justify-center'>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className='flex border-2 rounded'
                  >
                    <input
                      type='text'
                      className='px-4 py-2 sm:w-11/12 md:w-80'
                      placeholder='Search...'
                      onChange={(e) => handleChange(e)}
                      value={searchItem}
                    />
                    <button
                      type='submit'
                      onClick={search}
                      className='flex items-center justify-center px-4 border-l'
                    >
                      <svg
                        className='w-6 h-6 text-gray-600'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                      >
                        <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RESULTS */}
    </>
  )
}
export default Searchbar
