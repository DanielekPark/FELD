import type { NextPage } from 'next'
import useSWR from 'swr'
import React, { useState, useEffect, FC, useRef } from 'react'
import Footer from '../../components/footer'
// import Error from '../components/error'
import Nav from '../../components/Nav'
import { useRouter } from 'next/router'
import { fetcher } from '../../utils/fetcher'
import Error from '../../components/error'

const SearchLinks = () => {
  const [searchItem, setSearchItem] = useState<string>('')
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()
  const { query, asPath } = router
  const { id } = query

  const { data, error } = useSWR(`/api/results/${id}`, fetcher)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const search = () => {
    if (searchItem.length < 1) return

    //ENCODE URL
    const encoded = encodeURIComponent(searchItem)
    router.push(
      {
        pathname: `/results/${encoded}`,
        query: { tags: encoded },
      },
      undefined,
      { shallow: true }
    )
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value
    setSearchItem(input)
  }

  return (
    <>
      <Nav />
      <div className='bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24'>
        <div className='relative max-w-xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Find a link
            </h2>
            <p className='mt-4 text-lg leading-6 text-gray-500'>{/*error ? 'No results' : `${data?.length} results`*/}Results</p>
          </div>
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
                      className='px-4 py-2 w-80'
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
      {data ? (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3'>
                  Details
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.map((item: any, index: number) => {
                const { id, name, link, details, type } = item
                return (
                  <tr
                    key={`${index}${name.split('').join()}${id}`}
                    className='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
                  >
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                    >
                      <a
                        href={`${link}`}
                        target='_blank'
                        rel='noreferrer'
                        className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        {name}
                      </a>
                    </th>
                    <td className='px-6 py-4'>{type}</td>
                    <td className='px-6 py-4'>{details}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {/* Error message if there is a problem  */}
        </div>
      ) : (
        // <Error />
        null
      )}
      <Footer />
    </>
  )
}
export default SearchLinks

//Create layout component
//https://medium.com/nextjs/how-to-build-a-layout-in-nextjs-80d28d571673