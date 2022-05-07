import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import UserNote from '../components/userNote'
import Footer from '../components/footer'
import Error from '../components/error'
import Demo from '../components/demo'

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/db', fetcher)

  //Display an error if no response/data is returned from the server
  const len: number = data?.length || 0; 

  return (
    <div className={styles.container}>
      <Head>
        <title>Links Directory</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Table data={data} /> */}
      <UserNote />
      <Demo />
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
                      rel="noreferrer"
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
        {len < 1 ? <Error /> : null}
      </div>
    </div>
  )
}


export default Home
/*
https://nextjs.org/docs/routing/dynamic-routes
https://nextjs.org/learn/basics/data-fetching/two-forms
https://nextjs.org/docs/basic-features/data-fetching/client-side
https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest/pages
*/