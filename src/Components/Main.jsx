// import * from React as React 'react'
import * as React from 'react'
// import React from 'react'
import SingleCoin from './SingleCoin';
import TrendingCoin from './TrendingCoin';
import TrendingNFT from './TrendingNFT';
import lightmode from '../assets/lightmode.svg'
import refreshicon from '../assets/refreshicon.svg'
import TitleGraph from '../assets/dogWifiHat_sparkline.svg'

export default function Main({trendingCoinsData,handleRefresh,trendingNFTData,bitcoinData}){
    const[lightMode,setLightMode] = React.useState(false);
    function handleLightMode(){
        setLightMode(x=>!x)
        console.log('lightmode', lightMode)
    }
    const trendingCoinsElements = trendingCoinsData ? (
        trendingCoinsData.map((coin) => (
          <TrendingCoin
            key={coin.item.id}
            coinData = {coin}
          />
        ))
      ) : null;
    // components pending to be rendered
      const trendingNFTsElements = trendingNFTData ?(
        trendingNFTData.map((nft)=>(
            <TrendingNFT
                key = {nft.name}
                nftData={nft}
            />
        ))
      ):null;
      const bitcoinElement = bitcoinData ? (
          <SingleCoin
            key={1}
            coinData = {bitcoinData}
          />

      ):null;

    return(
        <main className = 'main'>
            <div className='nav--container'>
                <div className = 'nav--title--container'>
                <h2 className='nav--title'>CryptoWatch</h2>
                <img className ='nav--title--graph' src = {TitleGraph} alt="" />
                </div>
               

                <div className = 'nav--buttons'>
                    <span className='light--button' onClick = {handleLightMode}>
                        <img className = 'lightmode--icon' src={lightmode} alt="lightMode icon" />
                    </span>
                    <span className='light--button' onClick = {handleRefresh}>
                        <img className = 'refresh--icon' src={refreshicon} alt="refresh icon" />
                    </span>
                </div>
            </div>

            <h3 className = 'trending--coins--headline'>Trending Coins🔥</h3>
            <h4 className = 'trending--coins--descript'>Coins who have been searched for the most</h4>
            <h4 className = 'trending--coins--descript'> Data updated every 10 minutes.</h4>
            <div className = 'trending--coins--container'>
                <div className = 'trending--coin--label'>
                    <div className = 'trending--coin--name--label'>
                        <h5>Coin</h5>
                    </div>
                    <div className = 'trending--coin--stats--label'>
                        <h5 className = 'trending--coin--price--label'>Price</h5>
                        <h5 className = 'trending--coin--24hr--label'> 24HR % Change</h5>
                        <h5 className = 'trending--coin--market--label'>Market Cap</h5>
                    </div>
                    <div className = 'trending--coin--graph--label'>
                        <h5>7 Day Overview</h5>
                    </div>
                </div>
                {trendingCoinsElements}
            </div>
            {/* <div className = 'nft--bitcoin--container'>
            <Box sx={{ width: "100%" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                    <Grid item xs={12} md={4}>
                        <h5 className = 'trending--coins--headline'>Trending NFTS🔥</h5>
                        <div className = 'nft--elements--container'>
                            {trendingNFTsElements}
                        </div>   
                    </Grid>
                    <Grid item xs={12} md = {8} className = 'bitcoin--container'>
                        BITCOIN SECTION
                    </Grid>
                </Grid>
            </Box>
            </div> */}

        </main>
    )
}