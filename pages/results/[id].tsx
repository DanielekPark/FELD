import type { NextPage } from 'next'
import useSWR from 'swr'
import { useState, useEffect, FC, useRef } from 'react'
import Footer from '../../components/footer'
// import Error from '../components/error'
import Nav from '../../components/Nav'
import { useRouter } from 'next/router'
import { fetcher } from '../../utils/fetcher'

const searchLinks = () => {
  const [searchItem, setSearchItem] = useState<string>('')
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()
  const {query, asPath, } = router
  const {id} = query

  // const { data, error } = useSWR(`/api/results/${router.query}`, fetcher)
  
  const handleChange = (e: React.KeyboardEvent) => {
    const input = e.target as typeof e.target & {
      value: string
    }

    if(input.value.length < 1) return

    if(e.key === 'Enter'){
      router.push(
        {
          pathname: `/results/${input.value}`,
          query: {tags: input.value}
        },
        undefined,
        {shallow: true}
      )
    }
    
  }

  const fetchData = async () => {
    try {
      if(!id) return
      const res = await fetch(`/api/results/${id}`)
      const data = await res.json()
      setResults(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Nav />
      <div className='bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24'>
        <div className='relative max-w-xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Find a link
            </h2>
            <p className='mt-4 text-lg leading-6 text-gray-500'>
              Type keyword(s) to find a link that can help you.
            </p>
          </div>
          <div className='mt-12'>
            <div
              className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            >
              <div className='sm:col-span-2'>
                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label> */}
                <div className='flex items-center justify-center'>
                  <form onSubmit={(e) => e.preventDefault()}  className='flex border-2 rounded'>
                    <input
                      type='text'
                      className='px-4 py-2 w-80'
                      placeholder='Search...' 
                      onKeyPress={handleChange}
                    />
                    <button className='flex items-center justify-center px-4 border-l'>
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

      <Footer />
    </>
  )
}
export default searchLinks
//Create layout component
//https://medium.com/nextjs/how-to-build-a-layout-in-nextjs-80d28d571673

//fix the query string format
//Improve SQL backend search 
//Change card display
//Fix fast reload error
/* 
The second set you're referring to, where the text dissolves into view once you hover over the image, would work best with image content, such as the "samples" on you site. I think with the list/rows of resources you have, the sliding interaction (third set) on hovering over it may work better, but now that I'm thinking about it having to slide from left to right might look clunky (take too long at an appropriate speed etc.)

an example of what I mean by might look clunky since it's long: https://www.figma.com/proto/UcgVxQfMDlCkswIkWVnf6Q/Portfolio?page-id=205%3A56&node-[…]C48%2C0.31&scaling=min-zoom&starting-point-node-id=899%3A16144

basically a working product, so you can prioritize making the whole bar OR the name itself the clickable link instead. In terms of making the interaction more "fun", let's keep generating some ideas as we go. 

added the bottom line in my example, just to show what I had meant with the hover and text popping up. I had envisioned the textbox following the mouse as it hovered over the row, but due to limits I have with this prototyping tool i could only show it popping up in one place.
*/