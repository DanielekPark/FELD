export default function Contact() {
  return (
    <div className='bg-white'>
      <div className='h-[70vh] max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Questions? Suggestions?
        </h2>
        <p className='mt-6 text-lg text-gray-500 max-w-3xl'>
          If you are the owner of a site or if a link is broken please contact
          me and I will remove it. Have a suggestion for a link? Send me a
          message.
        </p>
        <div className='mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          <div>
            <a
              className='text-blue-600/100 font-bold'
              href='https://tally.so/r/w20ZVm'
              target='_blank'
              rel='noreferrer'
            >
              <h3 className='text-lg font-medium text-blue-600/100'>Tally</h3>{' '}
            </a>
          </div>
          <div>
            <a
              className='text-blue-600/100 font-bold'
              href='https://github.com/DanielekPark'
              target='_blank'
              rel='noreferrer'
            >
              <h3 className='text-lg font-medium text-blue-600/100'>Github</h3>{' '}
            </a>
          </div>
          <div>
            <a
              className='text-blue-600/100 font-bold'
              href='https://www.linkedin.com/in/daniel-park-70878119a/'
              target='_blank'
              rel='noreferrer'
            >
              <h3 className='text-lg font-medium text-blue-600/100'>Linkedin</h3>{' '}
            </a>
          </div>
          <div>
            <a
              className='text-blue-600/100 font-bold'
              href='mailto:daniel.ek.park@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <h3 className='text-lg font-medium text-blue-600/100'>Gmail</h3>{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
