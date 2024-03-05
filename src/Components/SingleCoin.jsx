import React from 'react'
export default function SingleCoin({coinData}){
    return(
        <div>
            <img src={coinData.image.large} alt="bitcoin logo" />
            
            <h3>{coinData.name}</h3>
        </div>
    )
}