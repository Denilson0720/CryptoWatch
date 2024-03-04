
import { useState,useEffect } from 'react'
// import 'dotenv/config'
const ACCESS_TOKEN = import .meta.env.VITE_ACCESS_TOKEN;
import Main from './Components/Main'
function App() {
  const [trendingCoinsData,setTrendingCoinsData] = useState([]);
  const [trendingNFTSData, setTrendingNFTSData] = useState([]);
  const [bitcoinData,setBitcoinData] = useState([]);
  const [refresh,setRefresh] = useState(false);
 
  async function getTrendingData() {
    const options = {
      method: 'GET',
      headers: { 'x_cg_demo_api_key': ACCESS_TOKEN} // Fix: Removed '&' before the key
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
      const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin',options);
      const data = await response.json();
      setBitcoinData(data)
      console.log('bitcoinData from function: ',bitcoinData); 
    }
    catch(err){
      console.log(err);
    }
  }

  function handleRefresh(){
    setRefresh(x=>!x)
    console.log(refresh);
  } 

  useEffect(()=>{
    getBitcoinData();
    getTrendingData();
  },[refresh])

  function handleClick(){
    setShowLabels(x=>!x);
  }


  
  return (
    <>
      <Main 
        //State data is being passed down as prop
        trendingCoinsData = {trendingCoinsData}
        trendingNFTData = {trendingNFTSData}
        bitcoinData = {bitcoinData}
        handleRefresh = {handleRefresh}
      />
   
    </>
  )
}

export default App

