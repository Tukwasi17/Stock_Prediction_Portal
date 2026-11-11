import React from 'react'

const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>
            This stock prediction application utilizes machine learing
            techniques, specifically employing Keras and LSTM model, 
            integrated within the Django framework. it forecasts future
            stock prices by analyzing 100-days and 200-days moving average
            essential indicators widely used by stock analysis to inform trading and
            investment decisions.
          </p>
          <button text="Login" class='btn-outline-info' />
        </div>
      </div>
    </>
  )
}

export default Main