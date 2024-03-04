// import * from React as React 'react'
import * as React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
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
      
      const trendingNFTsElements = trendingNFTData ?(
        trendingNFTData.map((nft)=>(
            <TrendingNFT
                key = {nft.name}
                nftData={nft}
            />
        ))
      ):null;
      const bitcoinElement = bitcoinData ? (
        // bitcoinData.map((coin) => (
          <SingleCoin
            key={1}
            coinData = {bitcoinData}
          />

      ) : null;

    
    function handleClick(){
        console.log('trendingCoinData from Main component', trendingCoinsData);
        console.log('bitcoinData from Main Component', bitcoinData)
        console.log('state bitcoin', bitcoin)
        console.log('state nft: ', trendingNFTS)
    }
  
    return(
        // <main className={lightMode?'main main--light':'main main--dark'}>
        <main className = 'main'>
            <div className='nav--container'>
                <div className = 'nav--title--container'>
                <h2 className='nav--title'>CryptoWatch</h2>
                {/* <img className = 'nav--title--graph'src={trendingCoinsData[0].item.data.sparkline} alt="" /> */}
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
            {/* <button onClick={handleClick} className = 'light--button'>Press me for info</button> */}
            <h3 className = 'trending--coins--headline'>Trending Coins🔥</h3>
            <h4 className = 'trending--coins--descript'>Coins who have been searched for the most</h4>
            <h4 className = 'trending--coins--descript'> Data updated every 10 minutes.</h4>
            {/* <button onClick = {handleRefresh}>Click Me</button> */}
            {/* <button onClick = {handleClick}>Click Me for data print</button> */}
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
            {/* <h3 className = 'trending--coins--headline'>Top Winners and Losers</h3> */}
            <div className = 'nft--bitcoin--container'>
            <Box sx={{ width: "100%" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                    <Grid item xs={12} md={4}>
                        {/* nft elements components */}

                        <h5 className = 'trending--coins--headline'>Trending NFTS🔥</h5>
                        <div className = 'nft--elements--container'>
                            {trendingNFTsElements}
                        </div>
                       
                        
                    </Grid>
                    <Grid item xs={12} md = {8}>
                        <h5 className = 'trending--coins--headline'>🔥Who doesnt love Bitcoin🔥</h5>
                        {/* {bitcoinElement}*/}
                        <h4 className='trending--coins--headline'>WORK IN PROGRESS...</h4>
                        <h3 className ='trending--coins--headline'>Bitcoin data in the future...</h3>
                    </Grid>
                </Grid>
            </Box>
            </div>
        </main>
    )
}