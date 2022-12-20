import useSWR from 'swr'
import React, { useState, useEffect, FC, useRef } from 'react'
import { useRouter } from 'next/router'
import { fetcher } from '../../utils/fetcher'
import Card from '../../components/card'
import Searchbar from '../../components/searchbar'


const SearchLinks = () => {
  const router = useRouter()
  const { query } = router
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

        <div className='relative pt-10 pb-20 px-4 sm:px-6 lg:pt-18 lg:pb-28 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='bg-white h-1/3 sm:h-2/3' />
          </div>
          <div className='relative max-w-7xl mx-auto'>
            <div className='mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none'>
              {data?.map((item: any, index: number) => {
                const { name, img, details, link } = item
                return (
                  <Card name={name} details={details} link={link} key={`${index}${name}`} />
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