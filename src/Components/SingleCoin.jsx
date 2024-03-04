import React from 'react'
export default function SingleCoin({coinData}){
    return(
        <div>
            {coinData?
            <>
                <img src={coinData.image.large} alt={coinData.name} />
                <p>Bitcoin</p>
            </>
          
            :null}
        </div>
    )
}