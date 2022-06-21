import React from 'react'
import { randomBg } from '../utils/randomBg'

type Props = {
  name: string
  link: string
  details: string
}

//need to remove background gradient
const Card: React.FC<Props> = ({ name, link, details }: Props) => {
  return (
      <div className='space-y-4'>
        <div
          className='aspect-w-3 aspect-h-2'
          style={{ background: `linear-gradient(to right, ${randomBg()})` }}
        >
          {/* <img
            className='object-cover shadow-lg rounded-lg'
            src='https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
            alt=''
          /> */}
          <div
            className={`mx-auto h-40 w-40 xl:w-56 xl:h-56 ${randomBg()} border-black border-2`}
          ></div>
        </div>
        <div className='text-lg leading-6 font-medium space-y-1 overflow-hidden'>
          <a href={link} target='_blank' rel="noreferrer">
            <h3>{name}</h3>
          </a>
          <p className='text-black-600'>{details}</p>
        </div>
      </div>

  )
}

export default Card

/*           <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {imageArry.map((item) => {
              const { name, img, details, link } = item
              return (
                <div
                  key={name}
                  className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                >
                  <div className='flex-shrink-0 mx-auto'>
                    <div className="" width={150} height={150} />
                  </div>
                  <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                    <div className='flex-1 flex flex-col'>
                      <p className='text-sm font-medium text-blue-600 mt-auto'>
                        <a
                          href={link}
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
                          {details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>   */