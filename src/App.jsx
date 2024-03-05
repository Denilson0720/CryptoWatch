
import { useState,useEffect } from 'react'
const ACCESS_TOKEN = import .meta.env.VITE_ACCESS_TOKEN;
import Main from './Components/Main'

function App() {
  const [trendingCoinsData,setTrendingCoinsData] = useState([]);
  const [trendingNFTSData, setTrendingNFTSData] = useState([]);
  const [bitcoinData,setBitcoinData] = useState([]);
  const [refresh,setRefresh] = useState(false);

  //API CALLS  
  async function getTrendingData() {
    const options = {
      method: 'GET',
      headers: { 'x_cg_demo_api_key': ACCESS_TOKEN}
    };
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/search/trending', options);
      const data = await response.json();
      setTrendingCoinsData(data.coins);
      setTrendingNFTSData(data.nfts);
    } catch (err) {
      console.error(err);
    }
  }

  async function getBitcoinData(){
    const options={
      method:'GET',
      header:{'x_cg_demo_api_key': ACCESS_TOKEN}
    };
    try{
      const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum',options);
      const data = await response.json();
      setBitcoinData(data)
      console.log('bitcoinData from function: ',bitcoinData); 
    }
    catch(err){
      console.log('error: ', err);
    }
  }
  // REFRESH FOR NEW DATA
  function handleRefresh(){
    setRefresh(x=>!x)
  } 
  // FETCH DATA AFTER INITIAL RENDER AS WELL AS EVERYTIME REFRESH STATE IS FLIPPED
  useEffect(()=>{
    getBitcoinData();
    getTrendingData();
  },[refresh])
  return (
    <>
      <Main 
        // PASS API DATA SAVED INTO STATE AS PROPS
        trendingCoinsData = {trendingCoinsData}
        trendingNFTData = {trendingNFTSData}
        bitcoinData = {bitcoinData}
        handleRefresh = {handleRefresh}
      />
    </>
  )
}

export default App

