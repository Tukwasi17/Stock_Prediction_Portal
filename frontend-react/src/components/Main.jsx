import React from 'react'
import Button from './Button'

const main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction App</h1>
                <p className='text-light lead'>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Aliquid iste dicta ad 
                    eligendi nobis! Magni expedita dolor vitae 
                    pariatur sequi facere exercitationem atque 
                    saepe alias ea, praesentium debitis eum ullam!
                </p>
                {/* <a className='btn btn-info' href="">Login</a> */}
                <Button text="Login" class="btn-outline-info" url="/Login" /> 
            </div>
      </div>
    </>
  )
}

export default main