import React from 'react'

type Props = {
  name: string
  link: string
  details: string
}

//need to remove background gradient
const Card: React.FC<Props> = ({ name, link, details }: Props) => {
  return (
    <div className=''>
      <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>
        
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {details}
        </p>
        <a
          href={link}
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-400 rounded-lg'
          target="_blank"
          rel="noreferrer"
        >
          Try it
        </a>
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
