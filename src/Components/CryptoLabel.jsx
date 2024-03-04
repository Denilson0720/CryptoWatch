import React from 'react'
export default function CryptoLabel({coinData}){
    /*
     have acces to 
     coin id
     data{ price, price_btc, price_change_percentage_24{
        aed,
        usd, use usd for united states dollar
        }
     sparkline(string with link to svg image of graph)
     total volume,
     small(small icon),
     symbol(string of symbol 'HEART'),
     thumb(thumbnail)

    }
    */
    const calcPrice = (
        <>
             <span dangerouslySetInnerHTML={{ __html: coinData.item.data.price }} />
        </>
    )
    // const percentChangeDay=()=>(coinData.item.data.price_change_percentage_24h.usd)
    const percentChangeDay = () =>{
        let str= coinData.item.data.price_change_percentage_24h.usd;
        return str.toString().substring(0, 5)
        // return 0;
    };
    const btcPrice = () =>{
        let btc = coinData.item.price_btc;
        return btc.toString().substring(0,10)
    }


   function handleClick(){
    console.log({coinData})
   }
    return(
        <div className = 'crypto--labels'>
            <div className = 'coin--left'>
                <div>
                    <img src={coinData.item.small} alt="Icon" />
                    <h2 className = 'coin--name'>{coinData.item.name}</h2>
                    <h3 className = 'coin--symbol'>{coinData.item.symbol}</h3>
                   
                </div>
               
                <img className = 'coin--graph'src={coinData.item.data.sparkline} alt="some image" />
            </div>
            <div className = 'coin--right'>
                
                <h4 className = 'coin--price'>Price: {calcPrice}</h4>
                <h5>BTC Price: {btcPrice()}</h5>
                <h5 className ='coin--24h'>24hr Change %: {percentChangeDay()}</h5>
                <h5>Market Cap: {coinData.item.data.market_cap}</h5>

                {/* <p>1hr: {coinData.item.data.price_change_percentage_24h}</p> */}
                <button onClick={handleClick}>Print Coin Info</button>
            </div>
         

        </div>

    )
}