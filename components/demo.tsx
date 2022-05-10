import type { NextPage } from 'next'
import Image from 'next/image'
import dots from '/public/dots.jpeg'

export default function Demo() {
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            Sample Demos
          </h2>
        </div>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>

          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex justify-around mt-2'>
              <div className='flex-shrink-0'>
                <div className='star block mx-auto w-16 h-16 bg-amber-300' />
              </div>
              <div className='flex-shrink-0 space-around'>
                <div className='message block mx-auto w-16 h-16 bg-teal-400' />
              </div>
              <div className='flex-shrink-0 space-around'>
                <div className='frame block mx-auto w-16 h-16 bg-violet-900' />
              </div>
            </div>
            <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div className='flex-1'>
                <p className='text-sm font-medium text-blue-600'>
                  <a
                    href='https://bennettfeely.com/clippy/'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:underline'
                  >
                    Try it
                  </a>
                </p>
              </div>
              <div className='mt-3 flex items-center'>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>
                    This example shown is not an SVG, its HTML and CSS. Clippy is a tool for generating values for shape functions for the new and cool CSS clip-path property. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            {/* relative */}
            <div className='flex-shrink-0 mx-auto flip'>
                <Image src={dots} alt="pattern" width={150} height={150} />
            </div>
            <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div className='flex-1'>
                <p className='text-sm font-medium text-blue-600'>
                  <a
                    href='https://animista.net/#:~:text=Animista%20is%20a%20place%20where,those%20you%20will%20actually%20use.'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:underline'
                  >
                    Try it
                  </a>
                </p>
              </div>
              {/* absolute */}
              <div className='mt-3 flex items-center'>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>
                    PLACE WHERE YOU CAN PLAY WITH A COLLECTION OF PRE-MADE CSS ANIMATIONS. You will be able to see how they affect the animation on the spot.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <svg height='100%' width='100%'>
                <defs>
                  <pattern
                    id='doodad'
                    width='46.19'
                    height='40'
                    viewBox='0 0 34.64101615137755 30'
                    patternUnits='userSpaceOnUse'
                    patternTransform='rotate(135)'
                  >
                    <rect
                      width='100%'
                      height='100%'
                      fill='rgba(43, 108, 176,1)'
                    />
                    <path
                      d='M-20-20h200v200h-200M33.77 25.5L25.98 21L18.19 25.5L18.19 34.5L25.98 39L33.77 34.5zM16.45 25.5L8.66 21L0.87 25.5L0.87 34.5L8.66 39L16.45 34.5zM7.79 10.5L0 6L-7.79 10.5L-7.79 19.5L0 24L7.79 19.5zM16.45-4.5L8.66-9L0.87-4.5L0.87 4.5L8.66 9L16.45 4.5zM33.77-4.5L25.98-9L18.19-4.5L18.19 4.5L25.98 9L33.77 4.5zM42.43 10.5L34.64 6L26.85 10.5L26.85 19.5L34.64 24L42.43 19.5zM25.11 10.5L17.32 6L9.53 10.5L9.53 19.5L17.32 24L25.11 19.5z'
                      fill='rgba(49, 151, 149,1)'
                    />
                    <path
                      d='M-20-20h200v200h-200M36.21 25.25L27.98 20.5L19.75 25.25L19.75 34.75L27.98 39.5L36.21 34.75zM18.89 25.25L10.66 20.5L2.43 25.25L2.43 34.75L10.66 39.5L18.89 34.75zM10.23 10.25L2 5.5L-6.23 10.25L-6.23 19.75L2 24.5L10.23 19.75zM18.89-4.75L10.66-9.5L2.43-4.75L2.43 4.75L10.66 9.5L18.89 4.75zM36.21-4.75L27.98-9.5L19.75-4.75L19.75 4.75L27.98 9.5L36.21 4.75zM44.87 10.25L36.64 5.5L28.41 10.25L28.41 19.75L36.64 24.5L44.87 19.75zM53.53 25.25L45.3 20.5L37.07 25.25L37.07 34.75L45.3 39.5L53.53 34.75zM27.55 40.25L19.32 35.5L11.09 40.25L11.09 49.75L19.32 54.5L27.55 49.75zM1.57 25.25L-6.66 20.5L-14.89 25.25L-14.89 34.75L-6.66 39.5L1.57 34.75zM1.57-4.75L-6.66-9.5L-14.89-4.75L-14.89 4.75L-6.66 9.5L1.57 4.75zM27.55-19.75L19.32-24.5L11.09-19.75L11.09-10.25L19.32-5.5L27.55-10.25zM53.53-4.75L45.3-9.5L37.07-4.75L37.07 4.75L45.3 9.5L53.53 4.75zM44.87 40.25L36.64 35.5L28.41 40.25L28.41 49.75L36.64 54.5L44.87 49.75zM10.23 40.25L2 35.5L-6.23 40.25L-6.23 49.75L2 54.5L10.23 49.75zM-7.09 10.25L-15.32 5.5L-23.55 10.25L-23.55 19.75L-15.32 24.5L-7.09 19.75zM10.23-19.75L2-24.5L-6.23-19.75L-6.23-10.25L2-5.5L10.23-10.25zM44.87-19.75L36.64-24.5L28.41-19.75L28.41-10.25L36.64-5.5L44.87-10.25zM62.19 10.25L53.96 5.5L45.73 10.25L45.73 19.75L53.96 24.5L62.19 19.75zM27.55 10.25L19.32 5.5L11.09 10.25L11.09 19.75L19.32 24.5L27.55 19.75z'
                      fill='rgba(49, 130, 206,1)'
                    />
                  </pattern>
                </defs>
                <rect fill='url(#doodad)' height='200%' width='200%' />
              </svg>
            </div>
            <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div className='flex-1'>
                <p className='text-sm font-medium text-blue-600'>
                  <a
                    href='https://doodad.dev/pattern-generator/'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:underline'
                  >
                    Try it
                  </a>
                </p>
              </div>
              <div className='mt-3 flex items-center'>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>
                    Use this tool to create unique, seamless, royalty‑free
                    patterns. You can export your patterns as SVG, CSS, and PNG.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
