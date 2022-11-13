import React from 'react'

const Column = () => {
  return (
    <div className="coin-container">
            <div className="coin-row purple">
                <div className="coin">
                    <p className="bold">Coin</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price bold">Price</p>
                    <p className="coin-volume bold">Volume</p>
                    <p className='coin-percent bold'>Coin % change</p>
                    <p className="coin-marketcap bold">MarketCap</p>
                </div>
            </div> 
        </div>
  )
}

export default Column;