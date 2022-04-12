import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { useEffect } from 'react'
import Header from '../components/Nav'
// import Table from '../components/Table'
import UserNote from '../components/userNote'
import Footer from '../components/footer'
import Error from '../components/error'

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/db', fetcher)

  //Display an error if no response/data is returned from the server
  const len: number = data?.length || 0; 
  // useEffect(() => {
  //   console.log(data)
  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Links Directory</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {/* <Table data={data} /> */}
      {/* Demo section display example from sites */}
      <UserNote />
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
              <th scope='col' className='px-6 py-3'>
                Link
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
                    {name}
                  </th>
                  <td className='px-6 py-4'>{type}</td>
                  <td className='px-6 py-4'>{details}</td>
                  <td className='px-6 py-4'>
                    <a
                      href={`${link}`}
                      target='_blank'
                      className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    >
                      Site
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* Error message if there is a problem  */}
        {len < 1 ? <Error /> : null}
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      <Footer />
    </div>
  )
}

export default Home
