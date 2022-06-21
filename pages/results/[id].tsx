import type { NextPage } from 'next'
import useSWR from 'swr'
import React, { useState, useEffect, FC, useRef } from 'react'
import Footer from '../../components/footer'
import Nav from '../../components/Nav'
import { useRouter } from 'next/router'
import { fetcher } from '../../utils/fetcher'
import Error from '../../components/error'
import Card from '../../components/card'
import Searchbar from '../../components/searchbar'
import Image from 'next/image'
import dots from '/public/images/dots.jpeg'

const SearchLinks = () => {
  const [searchItem, setSearchItem] = useState<string>('')
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()
  const { query, asPath } = router
  const { id } = query

  const { data, error } = useSWR(`/api/results/${id}`, fetcher)

  return (
    <>
      <div className='relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-4 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              <span className='block xl:inline'>Results</span>
            </h1>
            <Searchbar />
          </div>
        </div>

        {/* <Table data={data} /> */}

        <div className='relative pt-10 pb-20 px-4 sm:px-6 lg:pt-18 lg:pb-28 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='bg-white h-1/3 sm:h-2/3' />
          </div>
          <div className='relative max-w-7xl mx-auto'>
            <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
              {data?.map((item: any) => {
                const { name, img, details, link } = item
                return (
                  <a 
                  key={name}
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='block'
                  >
                    <div
                      
                      className='flex flex-col rounded-lg shadow-lg bg-sky-400 text-white'
                    >
                      <h2 className='text-center'>{name}</h2>
                      <div className='flex-1 p-6 flex flex-col justify-between'>
                        <div className='flex-1 flex flex-col'>
                          <p className='text-sm font-medium  mt-auto'></p>
                        </div>
                        <div className='mt-3 flex items-center'>
                          <div className='ml-3'>
                            <p className='text-sm font-medium '>{details}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchLinks