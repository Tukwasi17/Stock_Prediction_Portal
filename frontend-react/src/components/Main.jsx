import React from 'react'
import Button from './Button'

const main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction App</h1>
                <p className='text-light lead'>
                  This stock prediction application Utilizes 
                  machine learning techniques, specifically 
                  employing Keras and LSTM model, integrated
                  within the Django framework. It forecasts future
                  stock price by analyzing 100-day and 200-day 
                  moving averages, essential indicators widely
                  used by stock analysts to inform trading and 
                  investment decisions.
                </p>
                {/* <a className='btn btn-info' href="">Login</a> */}
                <Button text="Expore Now" class="btn-outline-info" url="/dashboard" /> 
            </div>
      </div>
    </>
  )
}

export default main