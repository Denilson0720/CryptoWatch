import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function TrendingNFT({nftData}){
    return(
        <div className = 'nft--container'>
            <Box sx={{ width: '100%' }}>    
                <Grid container rowSpacing={2} columnSpacing={{ xs: 0.1, sm: 0, md: 0 }}>
                <Grid item xs={4}>
                    <div className = 'nft--title'>
                        <img src={nftData.thumb} alt="" />
                        <h5>{nftData.symbol}</h5>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className = 'nft--price'>
                        <h5>{nftData.data.floor_price}</h5>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className = 'nft--graph'>
                        <img src={nftData.data.sparkline} alt="" />
                    </div>
                </Grid>
                </Grid>
            </Box>
            <hr/>
        </div>
  

    )
}