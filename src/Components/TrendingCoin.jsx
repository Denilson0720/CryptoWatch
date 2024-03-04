import React from 'react'
import dollarSign from '@mui/icons-material/AttachMoney';
export default function TrendingCoin({coinData}){
    const calcPrice = (
        <>
             <span dangerouslySetInnerHTML={{ __html: coinData.item.data.price }} />
        </>
    )
    const percentChangeDay = () =>{
        let str= coinData.item.data.price_change_percentage_24h.usd;
        return str.toString().substring(0, 5)
    };
    return(
        <>
        <div className = 'trending--coin'>
            <div className = 'trending--coin--name--container'>
                {coinData.item.small?
                <img className = 'trending--coin--image' src={coinData.item.small} alt={coinData.item.name} />
                :dollarSign
            }
                <div>
                    <h3 className = 'trending--coin--name'>{coinData.item.name}</h3>
                    <h4 className = 'trending--coin--symbol'>{coinData.item.symbol}</h4>
                </div>

            </div>
            <div className= 'trending--coin--stats--container'>
                <h5 className ='trending--coin--price'>{calcPrice}</h5>
                <h5 className = 'trending--coin--24hr'>{percentChangeDay()}</h5>
                <h5 className = 'trending--coin--market'>{coinData.item.data.market_cap}</h5>
            </div>
            <div className = 'trending--coin--graph--container'>
                <img className = 'trending--coin--graph' src={coinData.item.data.sparkline} alt="graph" />
            </div>
        </div>
        <hr />
        </>
    )
}