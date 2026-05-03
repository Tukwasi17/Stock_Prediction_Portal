import React from 'react'

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
        <footer className='footer py-3 my-3'>
            <hr className='border-bottom' />
            <p className='text-light text-center'>&copy; {currentYear} - Build with ❤️ by Tukwasi Ugwuanyi</p>
        </footer>
    </>
  )
}

export default footer