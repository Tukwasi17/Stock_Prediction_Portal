import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='py-3 my-3'>
        <hr className='border-bottom' />
        <p className='text-light text-center'>
          &copy; {new Date().getFullYear()} - Built with &#128151; by Tukwasi. All rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer